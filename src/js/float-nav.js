function updateActiveNav(event) {
  const navItems = document.querySelectorAll('.float-nav-item');
  navItems.forEach(item => {
    if (event.target.href === item.children[0].href) {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    }
  });
}
document.querySelectorAll('.float-nav-item').forEach(item => {
  item.addEventListener('click', updateActiveNav);
});
