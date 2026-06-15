/* ============================================================
   Youth Network — main.js
   Handles: nav, mobile menu, language toggle, scroll effects,
   modals, contact form, animations
   ============================================================ */

'use strict';

/* ---- Language data ---- */
const translations = {
  no: {
    nav: ['Hjem', 'Om oss', 'Prosjekter', 'Muligheter', 'Kontakt'],
    hero_eyebrow: 'Drammen, Norge · Est. 2023',
    hero_title_line1: 'Styrker ungdommen',
    hero_title_line2: 'for en bærekraftig',
    hero_title_line3: 'fremtid',
    hero_sub: 'Youth Network er et flerkulturelt fellesskap som jobber for inkludering, europeisk dialog og en bedre fremtid for unge.',
    hero_cta1: 'Utforsk våre prosjekter',
    hero_cta2: 'Bli med oss',
    lang_btn: '🇬🇧 EN',
  },
  en: {
    nav: ['Home', 'About Us', 'Projects', 'Opportunities', 'Contact'],
    hero_eyebrow: 'Drammen, Norway · Est. 2023',
    hero_title_line1: 'Empowering youth',
    hero_title_line2: 'for a sustainable',
    hero_title_line3: 'future',
    hero_sub: 'Youth Network is a multicultural community working for inclusion, European dialogue and a better future for young people.',
    hero_cta1: 'Explore our projects',
    hero_cta2: 'Join us',
    lang_btn: '🇳🇴 NO',
  }
};

let currentLang = 'no';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  /* Nav links */
  document.querySelectorAll('[data-nav-label]').forEach((el, i) => {
    el.textContent = t.nav[i] ?? el.textContent;
  });

  /* Hero */
  setEl('hero-eyebrow-text', t.hero_eyebrow);
  setEl('hero-t1', t.hero_title_line1);
  setEl('hero-t2', t.hero_title_line2);
  setEl('hero-t3', t.hero_title_line3);
  setEl('hero-sub-text', t.hero_sub);
  setEl('hero-cta1', t.hero_cta1);
  setEl('hero-cta2', t.hero_cta2);

  /* Lang toggle buttons */
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = t.lang_btn;
  });

  document.documentElement.lang = lang;
}

function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function toggleLang() {
  applyLang(currentLang === 'no' ? 'en' : 'no');
}

/* ---- Scroll progress bar ---- */
function updateProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (scrollTop / docHeight * 100) + '%';
}

/* ---- Navbar scroll style ---- */
function updateNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(26,26,46,0.98)';
  } else {
    nav.style.background = 'rgba(26,26,46,0.92)';
  }
}

/* ---- Active nav link ---- */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}

/* ---- Mobile menu ---- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Intersection Observer for animations ---- */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ---- Projects tab filter ---- */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const cards   = document.querySelectorAll('.project-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---- Application modal ---- */
function openModal(title) {
  const overlay = document.getElementById('apply-modal');
  const titleEl = document.getElementById('modal-project-title');
  if (overlay) overlay.classList.add('open');
  if (titleEl) titleEl.textContent = title;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('apply-modal');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.project || ''));
  });

  const overlay = document.getElementById('apply-modal');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  }

  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  /* Application form submit */
  const applyForm = document.getElementById('apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Søknaden din er sendt! Vi tar kontakt snart. 🎉');
      applyForm.reset();
      closeModal();
    });
  }
}

/* ---- Contact form ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Meldingen din er sendt! Vi svarer innen 48 timer. ✉️');
    form.reset();
  });
}

/* ---- Toast notification ---- */
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed; bottom:2rem; right:2rem;
    background:#1a1a2e; color:#fff;
    padding:1rem 1.5rem; border-radius:0.75rem;
    font-size:0.9rem; font-weight:500;
    box-shadow:0 8px 30px rgba(0,0,0,0.25);
    z-index:500; max-width:340px;
    border-left:4px solid var(--color-green);
    animation:slideIn 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

const slideInStyle = document.createElement('style');
slideInStyle.textContent = '@keyframes slideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(slideInStyle);

/* ---- Smooth scroll for anchor links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAnimations();
  initTabs();
  initModal();
  initContactForm();
  initSmoothScroll();

  window.addEventListener('scroll', () => {
    updateProgress();
    updateNavbar();
    updateActiveNav();
  }, { passive: true });

  /* Lang toggle buttons */
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });
});
