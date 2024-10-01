document.addEventListener("DOMContentLoaded", () => {
  // Delay effect for elements when the page first loads
  const elements = document.querySelectorAll('.element');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove('opacity-0', 'translate-y-5');
      el.classList.add('fade-in');
    }, index * 300); // Adjust delay as needed
  });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight && rect.bottom >= 0
  );
}

// Add scroll event listener
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.element.opacity-0');
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.remove('opacity-0', 'translate-y-5');
      el.classList.add('fade-in');
    }
  });
});
