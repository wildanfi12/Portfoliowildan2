/* ==========================================================================
   WILDAN PORTFOLIO - SCROLL ANIMATIONS & INTERACTIVE ACCORDIONS
   Intersection Observer for scroll reveals, stats counters, skill bars & FAQ
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Trigger skill bars if inside this element
        if (entry.target.classList.contains('skills-wrapper')) {
          animateSkillBars();
        }
        
        // Trigger stat counters if inside stats grid
        if (entry.target.classList.contains('stats-grid')) {
          animateCounters();
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-up, .skills-wrapper, .stats-grid').forEach(el => {
    revealObserver.observe(el);
  });

  // 2. Animate Skill Progress Bars
  function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
      const targetWidth = bar.getAttribute('data-progress') || '85%';
      bar.style.width = targetWidth;
    });
  }

  // 3. Animate Stat Number Counters (500+, 20+, 1M+, 98%)
  let countersTriggered = false;
  function animateCounters() {
    if (countersTriggered) return;
    countersTriggered = true;

    document.querySelectorAll('.stat-number').forEach(counter => {
      const targetStr = counter.getAttribute('data-target') || '100';
      const isPercent = targetStr.includes('%');
      const isPlus = targetStr.includes('+');
      const isM = targetStr.includes('M');
      
      const targetNum = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
      let currentNum = 0;
      const duration = 1800; // ms
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = targetNum / totalSteps;

      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          currentNum = targetNum;
          clearInterval(timer);
        }
        
        let formatted = Math.floor(currentNum).toString();
        if (isM) formatted += 'M';
        if (isPlus) formatted += '+';
        if (isPercent) formatted += '%';
        
        counter.textContent = formatted;
      }, stepTime);
    });
  }

  // 4. FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close other items
        faqItems.forEach(other => other.classList.remove('active'));
        
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Budget Pill Toggle in Form
  const budgetBtns = document.querySelectorAll('.budget-btn');
  budgetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      budgetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
