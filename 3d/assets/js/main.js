// Custom cursor follow
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});

// Cursor expand on hover
document.querySelectorAll('.glass-item, .navbar span').forEach(item => {
  item.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
  item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
});
