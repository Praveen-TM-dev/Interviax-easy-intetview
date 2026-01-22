// STATIC CREDENTIALS
const VALID_USERNAME = "ptmadmin";
const VALID_PASSWORD = "ptmadmin$123";

/* LOGIN FUNCTION */
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "InterviewQuiz.html";
    } else {
        error.textContent = "Invalid username or password";
    }
}

/* PAGE PROTECTION */
function protectPage() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "Login.html";
    }
}

/* LOGOUT */
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "Login.html";
}
