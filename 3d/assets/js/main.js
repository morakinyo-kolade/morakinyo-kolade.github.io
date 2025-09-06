// #CUSTOM CURSOR FUNCTIONALITY
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// #HOVER EFFECTS FOR INTERACTIVE ELEMENTS
const hoverElements = document.querySelectorAll('.glass-item, .navbar div');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-grow');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});

// #VIDEO PLAYBACK FIX
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('bgVideo');
  
  // Ensure video plays correctly
  if (video) {
    video.play().catch(error => {
      console.log('Video autoplay prevented:', error);
      // Add play button overlay if needed
    });
  }
});
