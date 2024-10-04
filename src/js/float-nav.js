function updateActiveNav() {
  const navItems = document.querySelectorAll('.float-nav-item');
  navItems.forEach(item => {
    if (window.location.href === item.children[0].href) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
window.addEventListener('popstate', updateActiveNav);
updateActiveNav();