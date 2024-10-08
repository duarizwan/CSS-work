function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");

  const button = document.getElementById("theme_button");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (button) {
    if (body.classList.contains("dark")) {
      sunIcon.style.display = "inline"; // Show sun icon
      moonIcon.style.display = "none"; // Hide moon icon
    } else {
      sunIcon.style.display = "none"; // Hide sun icon
      moonIcon.style.display = "inline"; // Show moon icon
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme_button");
  if (button) {
    button.addEventListener("click", toggleTheme);
  }
});
