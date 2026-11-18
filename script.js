const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const formMessage = document.getElementById("formMessage");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Sembunyikan" : "Lihat";
  togglePassword.setAttribute("aria-label", isPassword ? "Sembunyikan password" : "Tampilkan password");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Tampilan login SI-BEL sudah berjalan. Hubungkan ke backend/autentikasi agar akun dapat diverifikasi.";
});
