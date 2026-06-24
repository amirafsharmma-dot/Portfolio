const navItems = document.querySelectorAll(".nav-item");

const header = document.getElementById("header");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const footer = document.getElementById("contact");


document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));

    target.classList.remove("animation");
    void target.offsetWidth;
    target.classList.add("animation");
  });
});


navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

const progressBars = document.querySelectorAll(".progress-bar");
const arr = ["70%", "45%", "90%", "30%"];

window.addEventListener("load", () => {
  progressBars.forEach((bar, index) => {
    const width = arr[index];
    bar.style.width = width;
  });
});
