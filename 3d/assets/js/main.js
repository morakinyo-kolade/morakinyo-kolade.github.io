// #HEAVY CURSOR WITH DRAG EFFECT
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let scale = 1;
let targetScale = 1;
const friction = 0.15; // Weight/drag amount (higher = heavier)

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function lerp(start, end, amount) {
  return (1 - amount) * start + amount * end;
}

function animate() {
  // Smooth heavy drag movement
  cursorX = lerp(cursorX, mouseX, friction);
  cursorY = lerp(cursorY, mouseY, friction);
  
  // Smooth scale animation
  scale = lerp(scale, targetScale, 0.2);
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  cursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
  
  requestAnimationFrame(animate);
}

animate();

// #HOVER EFFECTS
const hoverItems = document.querySelectorAll('.glass-item, .nav-left, .nav-center, .nav-right');

hoverItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    targetScale = 2.5; // Grow on hover
    cursor.classList.add('cursor-grow');
  });
  
  item.addEventListener('mouseleave', () => {
    targetScale = 1; // Return to normal
    cursor.classList.remove('cursor-grow');
  });
});

// #VIDEO FALLBACK
setTimeout(() => {
  const video = document.getElementById('bgVideo');
  if (video && video.paused) {
    document.querySelector('.video-container').style.background = 
      'linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)';
  }
}, 2000);
