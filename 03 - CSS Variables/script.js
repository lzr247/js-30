const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");

const r = document.querySelector(":root");

spacing.addEventListener("change", (e) => {
  r.style.setProperty("--spacing", e.target.value + "px");
});

blur.addEventListener("change", (e) => {
  r.style.setProperty("--blur", e.target.value + "px");
});

base.addEventListener("change", (e) => {
  r.style.setProperty("--base", e.target.value);
});
