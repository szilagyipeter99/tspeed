(menuBtn = document.querySelector(".header__menu-btn")),
  (menu = document.querySelector(".header__list")),
  (showMenu = () => {
    menu.classList.toggle("active"), menuBtn.classList.toggle("active");
  });
