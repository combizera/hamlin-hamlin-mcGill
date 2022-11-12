// Função Scroll Header
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}
window.addEventListener("scroll", scrollHeader);

// Dropdown Menu
const dropdownMenu1 = document.getElementById("dropdown-item1");
const menuItem1 = document.getElementById("menu-item1");

function showDropdown1(event) {
  event.preventDefault();
  dropdownMenu1.classList.toggle("active-dropdown-menu");
}

function removeDropdown() {
  dropdownMenu1.classList.remove("active-dropdown-menu");
}

menuItem1.addEventListener("click", showDropdown1);

dropdownMenu1.addEventListener("mouseleave", removeDropdown);

// Menu Mobile

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");
    });
  }
};

showMenu("bx", "menu-mobile");
