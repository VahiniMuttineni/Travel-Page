function checkLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  const correctUsername = "admin";
  const correctPassword = "travel123";

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "index.html"; // redirect to main travel page
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }

  return false;
}

document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const icon = this;
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  icon.classList.toggle("bi-eye-fill");
  icon.classList.toggle("bi-eye-slash-fill");
});
