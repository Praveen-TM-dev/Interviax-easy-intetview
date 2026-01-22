const topicList = document.getElementById("preptopicList");
const questionList = document.getElementById("questionList");
const questionHeader = document.getElementById("questionHeader");
const prepvideoList = document.getElementById("PrepvideoList");

function loadPrepTopics(data = TopicData) {
    topicList.innerHTML = "";

    data.sort((a, b) => a.priority - b.priority).forEach(topic => {
        const li = document.createElement("li");
        li.textContent = topic.name;
        li.onclick = () => loadPdfList(topic);
        topicList.appendChild(li);
    });
}

function filterPrepTopics() {
    const searchValue = document
        .getElementById("topicSearch")
        .value
        .toLowerCase();

    const filteredTopics = TopicData.filter(topic =>
        topic.name.toLowerCase().includes(searchValue)
    );

    loadPrepTopics(filteredTopics);
}


function loadPdfList(topic) {
    questionHeader.textContent = topic.name + " - PDFs";
    questionList.innerHTML = "";
    prepvideoList.innerHTML = "";

    topic.data.forEach(dt => {
        const li = document.createElement("li");
        li.classList.add("pdf-item");
        li.innerHTML = `
    <div class="pdf-row">
        <img src="images/pdflogo.png" class="pdf-icon-img" alt="PDF">
        <span class="pdf-title">${dt.title}</span>
        <span class="pdf-action">Read</span>
    </div>
`;
        li.onclick = () => openPdfModal(dt.file, dt.title);
        questionList.appendChild(li);

        /* VIDEO LIST */
        if (dt.url) {
            const vli = document.createElement("li");
            vli.className = "video-item";            
            vli.innerHTML = `
            <img src="images/youtube.png" class="yt-icon" alt="YouTube">
            <span class="video-text">${dt.videotitle}</span>
        `;
            vli.onclick = () => openVideoModal(dt.url, dt.videotitle);
            prepvideoList.appendChild(vli);
        }

    });
}

/* ---------- MODAL ---------- */

let currentPdfUrl = "";
let currentPdfName = "";

function openPdfModal(pdfUrl, title) {
    currentPdfUrl = pdfUrl;
    currentPdfName = pdfUrl.split("/").pop();

    document.getElementById("pdfTitle").textContent = title;
    document.getElementById("pdfViewer").src = pdfUrl;
    document.getElementById("pdfModal").classList.add("show");
}

async function downloadPdf() {
    try {
        const response = await fetch(currentPdfUrl);
        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = currentPdfName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
        alert("Unable to download PDF");
        console.error(err);
    }
}

function closePdfModal() {
    document.getElementById("pdfViewer").src = "";
    document.getElementById("pdfModal").classList.remove("show");
}


// video modal---------------------
function openVideoModal(embedUrl, title) {
    const modal = document.getElementById("prepvideoModal");
    const frame = document.getElementById("prepvideoFrame");
    const header = document.getElementById("prepvideoTitle");
    const openBtn = document.getElementById("prepopenInNewTab");

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



function closeVideoModal() {
    document.getElementById("prepvideoFrame").src = "";
    document.getElementById("prepvideoModal").classList.remove("show");
}




document.addEventListener("DOMContentLoaded", () => {
    loadPrepTopics();
    document.querySelector(".hamburger")
        .addEventListener("click", () =>
            document.querySelector(".sidebar").classList.toggle("collapsed")
        );
});