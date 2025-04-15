// Animate on scroll
const fadeInEls = document.querySelectorAll('.fade-in, .slide-in');

function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.3
});

fadeInEls.forEach(el => observer.observe(el));

// Smooth scroll for vegan flavor section
const carousel = document.querySelector('.vegan-carousel');
carousel.addEventListener('wheel', (e) => {
  e.preventDefault();
  carousel.scrollBy({
    left: e.deltaY < 0 ? -200 : 200,
    behavior: 'smooth'
  });
});
