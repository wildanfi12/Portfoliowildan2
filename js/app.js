/* ==========================================================================
   WILDAN PORTFOLIO - MAIN APP INITIALIZER
   Navbar scroll states, Theme Switcher (Dark/Light), Mobile drawer, Form Handler, Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher (Dark Luxury / Light Luxury) with Persistence & Animation
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check localStorage or default to dark
  const savedTheme = localStorage.getItem('wildan_portfolio_theme') || 'dark';
  applyTheme(savedTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Trigger rotation animation
      themeToggle.classList.add('animating');
      setTimeout(() => themeToggle.classList.remove('animating'), 600);

      applyTheme(newTheme, true);
    });
  }

  function applyTheme(theme, isUserAction = true) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wildan_portfolio_theme', theme);

    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    if (isUserAction && window.showToast) {
      showToast(`Switched to ${theme === 'dark' ? 'Dark Luxury' : 'Light Luxury'} Mode`);
    }
  }

  // 2. Sticky Navbar Scroll State
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Mobile Nav Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // 4. Scrollspy active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 5. Contact Form Submission -> Direct to WhatsApp (082250561757)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      const waNumber = '6282250561757';
      const text = `Halo Wildan! Saya ${name} (${email}).%0A%0APesan Project:%0A${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/${waNumber}?text=${text}`;

      showToast('Opening WhatsApp Chat...');
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        contactForm.reset();
      }, 800);
    });
  }

  // Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #6D5EF8 0%, #00D4FF 100%);
        color: #fff;
        padding: 1rem 1.8rem;
        border-radius: 9999px;
        box-shadow: 0 10px 30px rgba(109, 94, 248, 0.5);
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        z-index: 3000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 4000);
  }

  window.showToast = showToast;
});
