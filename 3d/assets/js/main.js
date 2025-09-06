// #SMOOTH CURSOR FOLLOW
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Smooth follow with easing
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

// #SMOOTH HOVER EFFECTS
const hoverItems = document.querySelectorAll('.glass-item, .nav-left, .nav-center, .nav-right');

hoverItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-grow');
  });
  
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});
