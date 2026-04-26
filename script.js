// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Passenger stepper
document.querySelectorAll('.step-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.parentElement.querySelector('.step-val');
    let n = parseInt(val.textContent) + parseInt(btn.dataset.d);
    if (n < 1) n = 1;
    if (n > 10) n = 10;
    val.textContent = n;
  });
});

// Number counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    let current = Math.floor(eased * target);
    if (target >= 1000000) {
      el.textContent = (current / 1000000).toFixed(1).replace('.0', '') + 'M' !== '2M' ?
        new Intl.NumberFormat('vi-VN').format(current) : new Intl.NumberFormat('vi-VN').format(current);
    } else {
      el.textContent = current;
    }
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target >= 1000000 ? new Intl.NumberFormat('vi-VN').format(target) : target;
  }
  requestAnimationFrame(update);
}

// IntersectionObserver for fade-up and counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('fade-up')) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
      if (entry.target.classList.contains('stat-num')) {
        animateCounter(entry.target);
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));

// Testimonials carousel
const cards = document.querySelectorAll('.testi-card');
let currentCard = 0;
setInterval(() => {
  cards[currentCard].classList.remove('active');
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add('active');
}, 4000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
