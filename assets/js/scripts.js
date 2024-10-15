const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Função para alternar o tema
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

// Definindo o tema ao carregar a página
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  rootHtml.setAttribute("data-theme", savedTheme);
  toggleTheme.classList.toggle("bi-sun", savedTheme === "light");
  toggleTheme.classList.toggle("bi-moon-stars", savedTheme === "dark");
};

// Event listener para alternar o tema
toggleTheme.addEventListener("click", changeTheme);

// Gerenciamento do acordeão
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle("active");
  });
});

// Gerenciamento do menu
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
