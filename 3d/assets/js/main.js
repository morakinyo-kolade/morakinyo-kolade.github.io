const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const hoverElements = document.querySelectorAll('.glass-item, .navbar span');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-grow');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});
