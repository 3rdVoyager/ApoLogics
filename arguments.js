/*🔥 Core Claims About Jesus
“Jesus was just a great moral teacher”
“The resurrection is a myth or legend”
“The Gospels are unreliable / corrupted over time”
“Jesus never claimed to be God”
“Christianity copied earlier religions”

🔥 Claims About Truth & Knowledge
“There is no absolute truth”
“Truth is relative to culture or perspective”
“You can’t really know what’s true”
“Science is the only reliable way to know truth”
“Faith is belief without evidence”

🔥 Claims About God’s Existence
“There is no evidence for God”
“God is just a human invention”
“Science has explained the universe, so God isn’t needed”
“If God exists, why isn’t He more obvious?”
“Miracles are impossible”

🔥 Problem of Evil
“If God is good and all-powerful, why is there evil?”
“Suffering disproves a loving God”
“The world is too broken to have a good creator”
“Natural disasters make no sense if God is in control”

🔥 Morality & Ethics
“Morality is subjective”
“You don’t need God to be a good person”
“The Bible is morally outdated”
“Christian morality is oppressive or harmful”
“Right and wrong are just social constructs”

🔥 Christianity & Science
“Science disproves God”
“Evolution disproves Christianity”
“The Bible conflicts with science”
“Miracles violate natural laws”
“Religion slows scientific progress”

🔥 Religious Pluralism
“All religions are basically the same”
“Christianity is just one path among many”
“It’s arrogant to say Christianity is the only truth”
“Different cultures create different religions, so none are objectively true”

🔥 Human Nature & Purpose
“Humans are basically good”
“Life has no objective meaning”
“We create our own purpose”
“We are just highly evolved animals”
“Consciousness is purely physical”

🔥 Church & Practical Objections
“Christians are hypocrites”
“Religion causes more harm than good”
“The Church has done terrible things in history”
“Christianity is just about control” */

const worldviewData = [
	{
		id: "jesus",
		name: "Claims about Jesus",
		shortDescription: "Identity, authority, and uniqueness of Christ.",
		claims: [
			{
				id: "moral-teacher",
				title: "Jesus was just a great moral teacher",
				claimSummary: "Jesus should be respected for ethics but not treated as divine.",
				coreIssue:
					"The claim overlooks Jesus' own authority statements and resurrection-centered claims, reducing Him to a role He did not claim for Himself.",
				christianResponse:
					"Christian thought presents Jesus as more than a teacher: He forgives sins, receives worship, and identifies Himself uniquely with the Father.",
				supportingReasoning: [
					"Historical claims about the resurrection are central to earliest Christian proclamation (1 Corinthians 15).",
					"If Jesus knowingly made false divine claims, He cannot be merely a reliable moral guide.",
					"The New Testament frames Christ's identity and mission together, not as separable ideas."
				],
				reflectionQuestion: "If Jesus claimed divine authority, what response is intellectually and personally consistent?"
			},
			{
				id: "legend",
				title: "Stories about Jesus were exaggerated later",
				claimSummary: "Accounts of Jesus grew into legend over time.",
				coreIssue:
					"This assumes a long myth-making gap that does not fit the relatively early sources used by Christian communities.",
				christianResponse:
					"Christian worldview arguments point to early creeds, eyewitness claims, and preserved testimony as constraints against total legendary development.",
				supportingReasoning: [
					"Many source materials date close to the events compared with ancient standards.",
					"Public proclamation in hostile settings made blatant invention difficult.",
					"The texts include details that do not function as polished propaganda."
				],
				reflectionQuestion: "What would count as adequate historical evidence for you in ancient history generally?"
			}
		]
	},
	{
		id: "truth",
		name: "Claims about Truth",
		shortDescription: "Relativism, objectivity, and coherence.",
		claims: [
			{
				id: "no-absolute-truth",
				title: "There is no absolute truth",
				claimSummary: "All truth claims are relative to people or cultures.",
				coreIssue:
					"The statement is self-referentially unstable because it presents itself as absolutely true.",
				christianResponse:
					"The Christian worldview argues that truth is grounded in God's consistent nature, allowing meaningful reason, logic, and moral accountability.",
				supportingReasoning: [
					"Logical contradictions cannot both be true in the same sense at the same time.",
					"Daily life assumes objective truths in law, science, and ethics.",
					"Biblical claims present truth as knowable and publicly communicable (John 14:6)."
				],
				reflectionQuestion: "Can a worldview deny objective truth and still make binding moral judgments?"
			},
			{
				id: "truth-is-power",
				title: "Truth is only a tool of power",
				claimSummary: "Truth claims mainly serve social control.",
				coreIssue:
					"This can reduce all knowledge to power dynamics while exempting itself from the same critique.",
				christianResponse:
					"Christianity acknowledges misuse of truth claims but maintains that truth itself is not created by power; it is discovered and tested against reality.",
				supportingReasoning: [
					"If all claims are only power plays, the critique itself loses objective force.",
					"Science and philosophy depend on standards that transcend group interests.",
					"Christian doctrine calls leaders to repentance when truth is abused."
				],
				reflectionQuestion: "How do we distinguish manipulation from genuine truth-seeking?"
			}
		]
	},
	{
		id: "morality",
		name: "Claims about Morality",
		shortDescription: "Ethics, human dignity, and moral grounding.",
		claims: [
			{
				id: "morality-social",
				title: "Morality is only social preference",
				claimSummary: "Right and wrong are just group agreements.",
				coreIssue:
					"If morality is only preference, objective condemnation of injustice becomes inconsistent.",
				christianResponse:
					"Christian worldview reasoning grounds moral obligations in God's character, giving both moral realism and human dignity.",
				supportingReasoning: [
					"We treat some acts as truly wrong, not merely disliked.",
					"Human rights language assumes inherent value beyond majority vote.",
					"Scripture presents moral law as reflective of God's holiness (Micah 6:8)."
				],
				reflectionQuestion: "What makes moral obligations binding even when they are costly?"
			},
			{
				id: "religion-causes-harm",
				title: "Religion causes more harm than good",
				claimSummary: "Religious belief is primarily destructive in society.",
				coreIssue:
					"The claim often generalizes from abuses while ignoring moral frameworks and reform movements shaped by Christian convictions.",
				christianResponse:
					"Christianity distinguishes misuse of religion from the teachings of Christ and evaluates institutions by their conformity to truth and love.",
				supportingReasoning: [
					"The gospel critiques hypocrisy and power abuse from within.",
					"Christian ethics motivated many works in education, charity, and justice.",
					"A worldview should be assessed by core doctrine and consistent lived expression."
				],
				reflectionQuestion: "Should ideas be judged by abuses alone or by their central claims and best exemplars?"
			}
		]
	},
	{
		id: "science",
		name: "Christianity and Science",
		shortDescription: "Faith, reason, and the natural world.",
		claims: [
			{
				id: "science-disproved-god",
				title: "Science has disproven God",
				claimSummary: "Empirical science eliminates the need for belief in God.",
				coreIssue:
					"The claim extends scientific method beyond its scope, treating it as the only path to knowledge.",
				christianResponse:
					"Christian worldview thought welcomes science while arguing that science explains mechanisms, not ultimate purpose or metaphysical foundations.",
				supportingReasoning: [
					"Science depends on assumptions like order, rationality, and intelligibility.",
					"Questions about why anything exists are philosophical, not merely experimental.",
					"Historically, many scientists worked from the belief that creation is orderly and worth studying."
				],
				reflectionQuestion: "What kinds of questions can science answer well, and which questions require philosophical reasoning?"
			},
			{
				id: "faith-vs-reason",
				title: "Faith and reason are opposites",
				claimSummary: "Belief in God requires abandoning rational inquiry.",
				coreIssue:
					"This creates a false dichotomy because everyone reasons from prior commitments, including secular frameworks.",
				christianResponse:
					"Christianity presents faith as trust grounded in reasons, evidence, and coherent worldview commitments.",
				supportingReasoning: [
					"Reasoning always starts from foundational assumptions.",
					"Christian thinkers historically contributed to philosophy and scientific investigation.",
					"Biblical faith involves memory, testimony, and reflection, not blind irrationality."
				],
				reflectionQuestion: "What standards of rationality should apply equally to all worldviews?"
			}
		]
	}
];