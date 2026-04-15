const ui = {
  homeCards: document.getElementById("home-category-cards"),
  categoryTabs: document.getElementById("category-tabs"),
  claimsList: document.getElementById("claims-list"),
  responseCard: document.getElementById("response-card"),
  navButtons: document.querySelectorAll(".nav-btn")
};

const tagDescriptions = {
  Jesus: "Claims and objections centered on Jesus.",
  Identity: "Questions about who Jesus is.",
  History: "Historical reliability and testimony claims.",
  Truth: "Statements about what truth is and how we know it.",
  Relativism: "Claims that truth is only perspective-based.",
  Epistemology: "How knowledge and truth claims are evaluated.",
  Morality: "Right, wrong, and moral obligation claims.",
  Ethics: "Frameworks for moral decision-making.",
  Church: "Objections about Christians and church history.",
  Science: "Science-related challenges to Christianity.",
  God: "Claims related to God's existence and action.",
  Faith: "How trust, belief, and commitment are defined.",
  Reason: "Rationality, logic, and evidence claims."
};

function toTagId(tagName) {
  return tagName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getTags() {
  const seen = new Set();

  return worldviewData
    .flatMap((claim) => (Array.isArray(claim.tags) ? claim.tags : []))
    .filter((tagName) => {
      if (!tagName || seen.has(tagName)) {
        return false;
      }
      seen.add(tagName);
      return true;
    })
    .map((tagName) => ({
      id: toTagId(tagName),
      name: tagName,
      shortDescription: tagDescriptions[tagName] || "Explore claims and responses for this tag."
    }));
}

const tags = getTags();

const state = {
  activeCategoryId: tags[0]?.id || null,
  activeClaimId: null
};

function getClaimsForActiveTag() {
  if (!state.activeCategoryId) {
    return [];
  }

  return worldviewData.filter((claim) => {
    if (!Array.isArray(claim.tags)) {
      return false;
    }
    return claim.tags.some((tag) => toTagId(tag) === state.activeCategoryId);
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderHomeCards() {
  ui.homeCards.innerHTML = "";

  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = "card-btn";
    button.type = "button";
    button.innerHTML = `<h3>${tag.name}</h3><p>${tag.shortDescription}</p>`;
    button.addEventListener("click", () => {
      state.activeCategoryId = tag.id;
      state.activeClaimId = null;
      renderCategories();
      renderClaims();
      renderResponse();
      scrollToSection("categories");
    });
    ui.homeCards.appendChild(button);
  });
}

function renderCategories() {
  ui.categoryTabs.innerHTML = "";

  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = `tab-btn ${tag.id === state.activeCategoryId ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(tag.id === state.activeCategoryId));
    button.textContent = tag.name;

    button.addEventListener("click", () => {
      state.activeCategoryId = tag.id;
      state.activeClaimId = null;
      renderCategories();
      renderClaims();
      renderResponse();
    });

    ui.categoryTabs.appendChild(button);
  });
}

function renderClaims() {
  const claims = getClaimsForActiveTag();
  ui.claimsList.innerHTML = "";

  if (!claims.length) {
    ui.claimsList.innerHTML = "<p class=\"placeholder\">No claims found for this tag yet.</p>";
    return;
  }

  claims.forEach((claim) => {
    const button = document.createElement("button");
    button.className = `claim-btn ${claim.id === state.activeClaimId ? "active" : ""}`;
    button.type = "button";
    button.textContent = claim.argument;

    button.addEventListener("click", () => {
      state.activeClaimId = claim.id;
      renderClaims();
      renderResponse();
    });

    ui.claimsList.appendChild(button);
  });
}

function renderResponse() {
  const claims = getClaimsForActiveTag();
  const claim = claims.find((item) => item.id === state.activeClaimId);

  if (!claim) {
    ui.responseCard.innerHTML = "<p class=\"placeholder\">Select a claim to view details.</p>";
    return;
  }

  const reasoningItems = claim.supportingReasoning
    .map((point) => `<li>${point}</li>`)
    .join("");

  const verseItems = (claim.bibleVerses || [])
    .map((verse) => `<li>${verse}</li>`)
    .join("");

  const tagItems = (claim.tags || [])
    .map((tag) => `<li>${tag}</li>`)
    .join("");

  ui.responseCard.innerHTML = `
    <div class="response-block">
      <h4>Core Issue With The Claim</h4>
      <p>${claim.coreIssue}</p>
    </div>
    <div class="response-block">
      <h4>Christian Worldview Response</h4>
      <p>${claim.christianResponse}</p>
    </div>
    <div class="response-block">
      <h4>Tags</h4>
      ${tagItems ? `<ul class="reason-list">${tagItems}</ul>` : "<p>No tags listed for this claim yet.</p>"}
    </div>
    <div class="response-block">
      <h4>Bible Verse(s)</h4>
      ${verseItems ? `<ul class="reason-list">${verseItems}</ul>` : "<p>No Bible verses listed for this claim yet.</p>"}
    </div>
    <div class="response-block">
      <h4>Supporting Reasoning</h4>
      <ul class="reason-list">${reasoningItems}</ul>
    </div>
  `;
}

function setupNavigation() {
  ui.navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.navTarget;
      if (target) {
        scrollToSection(target);
      }
    });
  });
}

function initializeApp() {
  setupNavigation();
  renderHomeCards();
  renderCategories();
  renderClaims();
  renderResponse();
}

initializeApp();
