// #CURSOR FOLLOW
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// #HOVER EFFECTS
const hoverItems = document.querySelectorAll('.glass-item, .nav-left, .nav-center, .nav-right');

hoverItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-grow');
  });
  
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});

// #VIDEO PLAYBACK FIX
function forceVideoPlay() {
  const video = document.getElementById('bgVideo');
  if (video) {
    video.play().catch(error => {
      console.log('Video playback failed, using fallback background');
      document.querySelector('.video-container').style.background = 
        'linear-gradient(45deg, #000000, #1a1a2e)';
    });
  }
}

// Try to play when page loads
document.addEventListener('DOMContentLoaded', forceVideoPlay);
// Try again when user interacts
document.addEventListener('click', forceVideoPlay);
