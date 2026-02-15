/**
 * ICIDA.COM.CY - Main JavaScript
 * General functionality and interactions
 */

class ICIDAWebsite {
  constructor() {
    this.header = document.querySelector('.header');
    this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    this.nav = document.querySelector('.nav');
    this.navLinks = document.querySelectorAll('.nav__link');

    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupScrollEffects();
    this.setupSmoothScroll();
    this.setupActiveNavigation();
    this.setupLazyLoading();
    this.setupModal();
    this.setupConditionalFields();

    // Add event listeners
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
  }

  setupModal() {
    const modalTrigger = document.querySelector('.btn-partner');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');

    if (!modal) return;

    if (modalTrigger) {
      modalTrigger.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close on click outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  setupConditionalFields() {
    // Country selection logic for Other field
    const countrySelect = document.getElementById('countrySelect');
    const otherCountryBox = document.getElementById('otherCountryBox');

    if (countrySelect && otherCountryBox) {
      countrySelect.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
          otherCountryBox.style.display = 'block';
          const input = otherCountryBox.querySelector('input');
          if (input) input.setAttribute('required', 'required');
        } else {
          otherCountryBox.style.display = 'none';
          const input = otherCountryBox.querySelector('input');
          if (input) input.removeAttribute('required');
        }
      });
    }
  }

  setupMobileMenu() {
    if (!this.mobileMenuToggle || !this.nav) return;

    this.mobileMenuToggle.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close menu when clicking on a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          this.closeMobileMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 &&
        this.nav.classList.contains('active') &&
        !this.nav.contains(e.target) &&
        !this.mobileMenuToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.nav.classList.toggle('active');
    this.mobileMenuToggle.classList.toggle('active');
    document.body.style.overflow = this.nav.classList.contains('active') ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.nav.classList.remove('active');
    this.mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  setupScrollEffects() {
    if (!this.header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add shadow on scroll
      if (currentScroll > 100) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }

      // Optional: Hide header on scroll down, show on scroll up
      // Uncomment if you want this behavior
      /*
      if (currentScroll > lastScroll && currentScroll > 200) {
        this.header.style.transform = 'translateY(-100%)';
      } else {
        this.header.style.transform = 'translateY(0)';
      }
      */

      lastScroll = currentScroll;
    });
  }

  setupSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupActiveNavigation() {
    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  setupLazyLoading() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  handleScroll() {
    // Add any scroll-based animations or effects here
  }

  handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      this.closeMobileMenu();
    }
  }
}

// Utility functions
const Utils = {
  // Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Format phone number for WhatsApp
  formatPhoneForWhatsApp(phone) {
    return phone.replace(/\D/g, '');
  },

  // Scroll to top
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ICIDAWebsite();

  // Add smooth reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
});

// Add scroll-to-top button functionality
window.addEventListener('scroll', () => {
  const scrollTopBtn = document.querySelector('.scroll-to-top');
  if (scrollTopBtn) {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
});

// Google Analytics placeholder
// Uncomment and add your GA tracking ID when ready
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your ID
*/
