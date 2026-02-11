// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Update icon
  if (isDarkMode) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled
  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPosition = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop - 100) {
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

// ===== Scroll Reveal Animation =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// ===== Typing Effect for Home Section (Optional Enhancement) =====
const subtitleElement = document.querySelector('.subtitle');
if (subtitleElement) {
  const subtitleText = subtitleElement.textContent;
  subtitleElement.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < subtitleText.length) {
      subtitleElement.textContent += subtitleText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// ===== Project Cards Hover Effect =====
const projectCards = document.querySelectorAll('.project-card, .certificate-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ===== Download CV Click Tracking =====
const downloadButtons = document.querySelectorAll('a[download]');

downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('CV Download initiated');
    // You can add analytics tracking here
  });
});

// ===== Certificate Links External Indicator =====
const certificateLinks = document.querySelectorAll('.cert-link');

certificateLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    console.log('Certificate viewed:', link.href);
    // You can add analytics tracking here
  });
});

// ===== Route Placeholder Project Links to GitHub =====
// Only replace links that are placeholders (href="#" or empty)
const GITHUB_PROFILE_URL = 'https://github.com/ronitraii';
document.querySelectorAll('.project-link').forEach(link => {
  const href = (link.getAttribute('href') || '').trim();
  if (!href || href === '#') {
    link.setAttribute('href', GITHUB_PROFILE_URL);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('aria-label', 'View on GitHub (@ronitraii)');
  }
});

// ===== Mobile Menu Toggle (for future implementation) =====
// This is a placeholder for mobile menu functionality
const createMobileMenu = () => {
  const navbar = document.querySelector('.navbar .container');
  const navLinks = document.querySelector('.nav-links');
  
  // Only create hamburger menu on mobile
  if (window.innerWidth <= 768 && !document.querySelector('.hamburger')) {
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
    
    navbar.appendChild(hamburger);
  }
};

// ===== Particle Background Effect (Optional) =====
const createParticles = () => {
  const homeSection = document.querySelector('.home-section');
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles');
  particlesContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  `;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
    `;
    particlesContainer.appendChild(particle);
  }
  
  homeSection.appendChild(particlesContainer);
};

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
      opacity: 0;
    }
  }
  
  .active {
    color: var(--primary-color) !important;
    background-color: var(--bg-secondary) !important;
  }
  
  @media (max-width: 768px) {
    .hamburger {
      display: block;
      background: transparent;
      border: none;
      font-size: 1.5rem;
      color: var(--text-color);
      cursor: pointer;
    }
    
    .nav-links.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--card-bg);
      padding: 1rem;
      box-shadow: var(--shadow);
    }
  }
`;
document.head.appendChild(style);

// ===== Initialize =====
window.addEventListener('load', () => {
  // Create particles effect (optional, can be commented out for better performance)
  // createParticles();
  
  // Initialize mobile menu if needed
  createMobileMenu();
  
  console.log('Portfolio loaded successfully!');
});

// ===== Page Load Performance =====
window.addEventListener('load', () => {
  // Hide loading spinner if you have one
  const loadingSpinner = document.querySelector('.loading-spinner');
  if (loadingSpinner) {
    loadingSpinner.style.display = 'none';
  }
  
  // Log performance metrics
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log(`Page load time: ${pageLoadTime}ms`);
});

// ===== Error Handling =====
window.addEventListener('error', (e) => {
  console.error('An error occurred:', e.error);
});

// ===== Back to Top Button (Optional) =====
const createBackToTopButton = () => {
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.classList.add('back-to-top');
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    z-index: 999;
    box-shadow: var(--shadow);
  `;
  
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = '1';
      button.style.transform = 'scale(1)';
    } else {
      button.style.opacity = '0';
      button.style.transform = 'scale(0.8)';
    }
  });
  
  document.body.appendChild(button);
};

// Initialize back to top button
createBackToTopButton();
