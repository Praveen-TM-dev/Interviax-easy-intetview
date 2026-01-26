let skillList, questionList, answerText, questionHeader;
let skillsConfig = [
    {
        key: "aspdotnetcore",
        name: "ASP.NET Core",
        priority: 1,
        file: "js/data/InterviewQuiz/aspdotnetcore.js"
    },
    {
        key: "mvcaspnet",
        name: "MVC.NET / ASP.NET",
        priority: 2,
        file: "js/data/InterviewQuiz/mvcaspnet.js"
    },
    {
        key: "csharp_linq",
        name: "C# / LINQ",
        priority: 3,
        file: "js/data/InterviewQuiz/csharp_linq.js"
    },
    {
        key: "dotnetframework",
        name: ".NET Framework",
        priority: 4,
        file: "js/data/InterviewQuiz/dotnetframework.js"
    },
    {
        key: "react_typescript",
        name: "React TypeScript",
        priority: 5,
        file: "js/data/InterviewQuiz/react_typescript.js"
    },
    {
        key: "javascript",
        name: "JavaScript",
        priority: 6,
        file: "js/data/InterviewQuiz/javascript.js"
    },
    {
        key: "html_bootstrap",
        name: "HTML / Bootstrap",
        priority: 7,
        file: "js/data/InterviewQuiz/html_bootstrap.js"
    },
    {
        key: "telerik_kendo",
        name: "Telerik / Kendo UI",
        priority: 8,
        file: "js/data/InterviewQuiz/telerik_kendo.js"
    },
    {
        key: "git",
        name: "Git Version Control",
        priority: 9,
        file: "js/data/InterviewQuiz/git.js"
    },
    {
        key: "devops",
        name: "DevOps",
        priority: 10,
        file: "js/data/InterviewQuiz/devops.js"
    },
    {
        key: "sqlserver",
        name: "SQL Server",
        priority: 11,
        file: "js/data/InterviewQuiz/sqlserver.js"
    },
    {
        key: "powershell",
        name: "PowerShell",
        priority: 12,
        file: "js/data/InterviewQuiz/powershell.js"
    },
    {
        key: "prompt_engineering",
        name: "Prompt Engineering",
        priority: 13,
        file: "js/data/InterviewQuiz/prompt_engineering.js"
    },
    {
        key: "ai_optimization",
        name: "AI Optimization",
        priority: 14,
        file: "js/data/InterviewQuiz/ai_optimization.js"
    },
    {
        key: "gemini",
        name: "Gemini AI",
        priority: 15,
        file: "js/data/InterviewQuiz/gemini.js"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hamburger")
        .addEventListener("click", () =>
            document.querySelector(".sidebar").classList.toggle("collapsed")
        );

    skillList = document.getElementById("skillList");
    questionList = document.getElementById("questionList");
    answerText = document.getElementById("answerText");
    questionHeader = document.getElementById("questionHeader");
    loadSkills();
});

/* Load skill list */
function loadSkills(data = skillsConfig) {
    skillList.innerHTML = "";

    data
        .slice()
        .sort((a, b) => a.priority - b.priority)
        .forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.name;

            li.onclick = () => {
                highlight(skillList, li);
                loadSkillQuestions(skill);
            };

            skillList.appendChild(li);
        });
}

/* Filter skills */
function filterSkills() {
    const query = document.getElementById("skillSearch").value.toLowerCase();

    const filtered = skillsConfig.filter(s =>
        s.name.toLowerCase().includes(query)
    );

    loadSkills(filtered);
}

/* Load questions dynamically (ONE skill only) */
function loadSkillQuestions(skill) {
    // Clear previous skill data
    window.skillQuestions = {};

    questionList.innerHTML = "";
    answerText.textContent = "Loading questions...";
    questionHeader.textContent = skill.name + " Questions";

    const script = document.createElement("script");
    script.src = skill.file;

    script.onload = () => renderQuestions(skill.key);
    document.body.appendChild(script);
}

/* Render questions */
function renderQuestions(skillKey) {
    const data = window.skillQuestions[skillKey];

    questionList.innerHTML = "";
    answerText.textContent = "Select a question to view the answer";

    data.questions.forEach(q => {
        const li = document.createElement("li");
        li.textContent = q.q;

        li.onclick = () => {
            highlight(questionList, li);
            answerText.innerHTML = q.a;
        };

        questionList.appendChild(li);
    });
}

/* Highlight helper */
function highlight(list, item) {
    [...list.children].forEach(li => li.classList.remove("active"));
    item.classList.add("active");
}
