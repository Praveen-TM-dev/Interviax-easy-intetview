const skillList = document.getElementById("videoSkillList");
const videoList = document.getElementById("videoList");
const videoHeader = document.getElementById("videoHeader");

const allskillsData = [
    { name: "ASP.NET Core", priority: 1 },
    { name: "C# / LINQ", priority: 2 },
    { name: "Agile Methodology", priority: 3 }
];

function loadVideoSkills(data = allskillsData) {
    skillList.innerHTML = "";

    data
        .sort((a, b) => a.priority - b.priority)
        .forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.name;
            li.tabIndex = 0;

            li.onclick = () => {
                highlight(skillList, li);
                loadVideos(skill.name);
            };

            li.onkeydown = e => {
                if (e.key === "Enter") {
                    highlight(skillList, li);
                    loadVideos(skill.name);
                }
            };

            skillList.appendChild(li);
        });
}


function filterVideoSkills() {
    const query = document
        .getElementById("skillSearch")
        .value
        .toLowerCase();

    const filtered = allskillsData.filter(skill =>
        skill.name.toLowerCase().includes(query)
    );

    loadVideoSkills(filtered);
}


function loadVideos(skillName) {
    videoList.innerHTML = "";
    videoHeader.textContent = skillName + " Related Videos";

    const videos = window.skillVideos[skillName] || [];

    if (videos.length === 0) {
        videoList.innerHTML = "<li>No videos added</li>";
        return;
    }

    videos.forEach(v => {   
        const li = document.createElement("li");
        li.className = "video-item";       
        li.innerHTML = `
            <img src="images/youtube.png" class="yt-icon" alt="YouTube">
            <span class="video-text">${v.title}</span>
        `;

        li.onclick = () => openVideo(v.url);
        videoList.appendChild(li);
    });
}


function openVideo(embedUrl, title = "Video") {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    const header = document.getElementById("videoTitle");
    const openBtn = document.getElementById("openInNewTab");

    header.textContent = title;

    // Convert embed URL-> watch URL
    const videoId = embedUrl.split("/embed/")[1];
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

    openBtn.onclick = () => {
        window.open(watchUrl, "_blank", "noopener");
    };

    frame.src = embedUrl + "?autoplay=1";
    modal.classList.add("show");
}



function closeVideo() {
    document.getElementById("videoFrame").src = "";
    document.getElementById("videoModal").classList.remove("show");
}

function highlight(list, item) {
    [...list.children].forEach(li => li.classList.remove("active"));
    item.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    loadVideoSkills();

    document.querySelector(".hamburger")
        .addEventListener("click", () =>
            document.querySelector(".sidebar").classList.toggle("collapsed")
        );
});
