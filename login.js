
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    icon.classList.toggle("bx-show");
    icon.classList.toggle("bx-low-vision");
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const fullName = document.getElementById("full-name").value;
    const rsbsaId = document.getElementById("rsbsa-id").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("rsbsaId", rsbsaId);
    localStorage.setItem("password", password); 

    alert("Registered successfully!");

});

document.getElementById("login-button").addEventListener("click", function () {
    const enteredId = document.getElementById("login-rsbsa-id").value;
    const enteredPassword = document.getElementById("login-password").value;

    const storedId = localStorage.getItem("rsbsaId");
    const storedPassword = localStorage.getItem("password");

    if (enteredId === storedId && enteredPassword === storedPassword) {

        alert("Login successful!");
        window.location.href = "./agriActivity.html";
    } else {

        alert("Invalid RSBSA ID or Password.");
    }
});