/* =============================================
   NAV — always visible, highlight active section
   ============================================= */
const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

// Keep nav always visible — never hide it
nav.style.opacity = '1';
nav.style.visibility = 'visible';
nav.style.display = 'flex';

window.addEventListener('scroll', () => {
  // Only change border color on scroll, never hide the nav
  nav.style.borderBottomColor = window.scrollY > 60 ? 'transparent' : '';
  // Force nav to always stay visible
  nav.style.opacity = '1';
  nav.style.visibility = 'visible';
}, { passive: true });

/* =============================================
   ACTIVE NAV LINK on scroll
   ============================================= */
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* =============================================
   MOBILE NAV TOGGLE
   ============================================= */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

toggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: #0a0a0a;
      padding: 24px 20px;
      border-bottom: 1px solid #2a2a2a;
      gap: 20px;
      z-index: 99;
    `;
  } else {
    navLinks.style.display = 'none';
  }
  toggle.setAttribute('aria-expanded', String(menuOpen));
});

// Close mobile menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    if (window.innerWidth <= 600) {
      navLinks.style.display = 'none';
    }
  });
});

// Reset nav links display on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navLinks.style.cssText = '';
    menuOpen = false;
  }
});

/* =============================================
   GALLERY FILTER
   ============================================= */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      const category = item.dataset.category;
      if (filter === 'all' || category === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

/* =============================================
   SCROLL REVEAL
   ============================================= */
const revealEls = document.querySelectorAll(
  '.gallery-item, .service-card, .case-card, .about-grid, .contact-headline, .section-header, .cert-item'
);

const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  el.dataset.delay = (i % 4) * 80;
  revealObserver.observe(el);
});
