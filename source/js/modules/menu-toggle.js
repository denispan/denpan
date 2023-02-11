

const menuToggleHandler = (iconOpen, iconClose, navMenu) => {
  iconOpen.classList.toggle('is-active');
  iconClose.classList.toggle('is-active');
  navMenu.classList.toggle('is-open');
};


const menuToggle = () => {
  const btnToggle = document.querySelector('[data-btn-toggle]');
  const iconOpen = btnToggle.querySelector('[data-icon-open]');
  const iconClose = btnToggle.querySelector('[data-icon-close]');
  const navMenu = document.querySelector('[data-header-nav]');
  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      menuToggleHandler(iconOpen, iconClose, navMenu);
    });
  }
};

export {menuToggle};
