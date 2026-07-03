/* =============================================
   NAV — shrink on scroll
   ============================================= */
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.borderBottomColor = 'transparent';
  } else {
    nav.style.borderBottomColor = '';
  }
}, { passive: true });

/* =============================================
   MOBILE NAV TOGGLE
   ============================================= */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = '#0a0a0a';
  navLinks.style.padding = '24px 20px';
  navLinks.style.borderBottom = '1px solid #2a2a2a';
  navLinks.style.gap = '20px';
  toggle.setAttribute('aria-expanded', String(!isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.style.display = 'none';
  });
});

/* =============================================
   SCROLL REVEAL
   ============================================= */
const revealEls = document.querySelectorAll(
  '.gallery-item, .about-grid, .contact-headline, .section-header'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.revealed').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});

document.head.insertAdjacentHTML('beforeend', `
  <style>
    .revealed {
      opacity: 1 !important;
      transform: none !important;
    }
  </style>
`);

/* =============================================
   ACTIVE NAV LINK on scroll
   ============================================= */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = '#f5f5f0';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
