const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? 'Close' : 'Menu';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menu';
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('is-active', item === button));
  const filter = button.dataset.filter;
  document.querySelectorAll('.work-card').forEach(card => card.hidden = filter !== 'all' && card.dataset.type !== filter);
}));
