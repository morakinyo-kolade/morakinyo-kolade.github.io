// Simple cursor follow
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Hover effects
const hoverElements = document.querySelectorAll('.glass-btn, .nav-item');

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('grow');
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
  });
});
