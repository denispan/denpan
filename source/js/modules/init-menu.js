const initMenu = () => {
  const menu = document.querySelector('[data-header-nav]');
  window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
      menu.setAttribute('data-modal', 'header-menu');
    } else {
      menu.removeAttribute('data-modal');
    }
  });
};

export {initMenu};
