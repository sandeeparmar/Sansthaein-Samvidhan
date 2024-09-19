const constitutionText = document.getElementById("constitution-text");
const caseText = document.getElementById("case-text");
const outcome = document.getElementById("outcome");

const cases = [
    {
        text: "The government has passed a law restricting freedom of speech...",
        relatedArticle: "Article 19: Protection of certain rights regarding freedom of speech, etc.",
        decision: "strike"
    },
    {
        text: "The government has passed a law providing free education to all children under 14...",
        relatedArticle: "Article 21A: Right to education.",
        decision: "uphold"
    }
];

const updateCase = (caseIndex) => {
    caseText.textContent = cases[caseIndex].text;
    constitutionText.textContent = cases[caseIndex].relatedArticle;
    outcome.textContent = "";
};

document.getElementById("uphold-btn").addEventListener("click", () => {
    if (cases[0].decision === "uphold") {
        outcome.textContent = "You have upheld the law. Your decision is correct!";
        outcome.style.color = "green";
    } else {
        outcome.textContent = "You have upheld the law. Your decision is incorrect!";
        outcome.style.color = "red";
    }
});

document.getElementById("strike-down-btn").addEventListener("click", () => {
    if (cases[0].decision === "strike") {
        outcome.textContent = "You have struck down the law. Your decision is correct!";
        outcome.style.color = "green";
    } else {
        outcome.textContent = "You have struck down the law. Your decision is incorrect!";
        outcome.style.color = "red";
    }
});

updateCase(0);
