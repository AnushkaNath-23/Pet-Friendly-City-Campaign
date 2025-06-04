import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Handle form submission
  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(volunteerForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // This would normally submit to a server
      console.log('Form submitted with values:', formValues);
      
      // Show success message
      volunteerForm.innerHTML = `
        <div class="success-message">
          <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: var(--space-md);"></i>
          <h3>Thank You for Volunteering!</h3>
          <p>We've received your application and will be in touch soon.</p>
        </div>
      `;
    });
  }

  // Pet adoption carousel
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');
  const items = document.querySelectorAll('.carousel-item');
  
  if (carousel && prevBtn && nextBtn && items.length > 0) {
    let currentIndex = 0;
    const itemWidth = items[0].getBoundingClientRect().width;
    const itemsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const maxIndex = Math.max(0, items.length - itemsPerView);
    
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * (itemWidth + 16)}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
        setTimeout(() => transitioning = false, 500);
      } else {
        // Loop back to beginning with animation
        currentIndex++;
        updateCarousel(true);
        setTimeout(() => {
          currentIndex = 0;
          updateCarousel(false);
          transitioning = false;
        }, 500);
      }
    });
    
    prevBtn.addEventListener('click', () => {
      if (transitioning) return;
      transitioning = true;

      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel(true);
        setTimeout(() => transitioning = false, 500);
      } else {
        // Loop to end with animation
        currentIndex = maxIndex;
        updateCarousel(false);
        setTimeout(() => {
          currentIndex = maxIndex;
          updateCarousel(false);
          transitioning = false;
        }, 500);
      }
    });

    // Auto-scroll carousel
    setInterval(() => {
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }, 5000);

    // Update carousel on window resize
    window.addEventListener('resize', () => {
      const newItemsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
      const newMaxIndex = Math.max(0, items.length - newItemsPerView);
      currentIndex = Math.min(currentIndex, newMaxIndex);
      updateCarousel();
    });
  }

  // Animate elements when they enter viewport
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .about-content, .story-card, .volunteer-form');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      
      if (elementPosition < screenPosition * 0.9) {
        element.classList.add('fade-in');
      }
    });
  };

  // Add CSS for fade-in animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      animation: fadeInUp 1s ease both;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .section-header, .about-content, .story-card, .volunteer-form {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);

  // Initial check and add scroll listener
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});