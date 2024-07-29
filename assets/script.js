const themeToggle = document.getElementById("theme-toggle");
const html = document.querySelector("html");

themeToggle.addEventListener("click", () => {
  if (themeToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
