const ui = {
  homeCards: document.getElementById("home-category-cards"),
  categoryTabs: document.getElementById("category-tabs"),
  claimsList: document.getElementById("claims-list"),
  responseCard: document.getElementById("response-card"),
  navButtons: document.querySelectorAll(".nav-btn")
};

const state = {
  activeCategoryId: worldviewData[0].id,
  activeClaimId: null
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderHomeCards() {
  ui.homeCards.innerHTML = "";

  worldviewData.forEach((category) => {
    const button = document.createElement("button");
    button.className = "card-btn";
    button.type = "button";
    button.innerHTML = `<h3>${category.name}</h3><p>${category.shortDescription}</p>`;
    button.addEventListener("click", () => {
      state.activeCategoryId = category.id;
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

  worldviewData.forEach((category) => {
    const button = document.createElement("button");
    button.className = `tab-btn ${category.id === state.activeCategoryId ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(category.id === state.activeCategoryId));
    button.textContent = category.name;

    button.addEventListener("click", () => {
      state.activeCategoryId = category.id;
      state.activeClaimId = null;
      renderCategories();
      renderClaims();
      renderResponse();
    });

    ui.categoryTabs.appendChild(button);
  });
}

function renderClaims() {
  const category = worldviewData.find((item) => item.id === state.activeCategoryId);
  ui.claimsList.innerHTML = "";

  if (!category) {
    return;
  }

  category.claims.forEach((claim) => {
    const button = document.createElement("button");
    button.className = `claim-btn ${claim.id === state.activeClaimId ? "active" : ""}`;
    button.type = "button";
    button.textContent = claim.title;

    button.addEventListener("click", () => {
      state.activeClaimId = claim.id;
      renderClaims();
      renderResponse();
    });

    ui.claimsList.appendChild(button);
  });
}

function renderResponse() {
  const category = worldviewData.find((item) => item.id === state.activeCategoryId);
  const claim = category?.claims.find((item) => item.id === state.activeClaimId);

  if (!claim) {
    ui.responseCard.innerHTML = "<p class=\"placeholder\">Select a claim to view details.</p>";
    return;
  }

  const reasoningItems = claim.supportingReasoning
    .map((point) => `<li>${point}</li>`)
    .join("");

  ui.responseCard.innerHTML = `
    <div class="response-block">
      <h4>Claim Summary</h4>
      <p>${claim.claimSummary}</p>
    </div>
    <div class="response-block">
      <h4>Core Issue With The Claim</h4>
      <p>${claim.coreIssue}</p>
    </div>
    <div class="response-block">
      <h4>Christian Worldview Response</h4>
      <p>${claim.christianResponse}</p>
    </div>
    <div class="response-block">
      <h4>Supporting Reasoning</h4>
      <ul class="reason-list">${reasoningItems}</ul>
    </div>
    <div class="response-block">
      <h4>Reflection Question</h4>
      <p>${claim.reflectionQuestion || "No reflection question provided for this claim."}</p>
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
