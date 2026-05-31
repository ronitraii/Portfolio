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

// ===== Theme Toggle (Default to Dark Mode) =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

if (themeToggle && themeIcon) {
  // Check for saved theme preference, default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.className = 'fas fa-moon';
  } else {
    document.body.classList.remove('light-mode');
    themeIcon.className = 'fas fa-sun';
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
      themeIcon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.className = 'fas fa-sun';
      localStorage.setItem('theme', 'dark');
    }
  });
}

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

  // Initialize security enhancements
  initTelemetry();
  initTerminal();
  initChallenge();
  
  console.log('Portfolio loaded successfully!');
});

// ===== Cybersecurity Interactive Enhancements =====

// 1. Live Telemetry setup
const initTelemetry = () => {
  const pingEl = document.getElementById('telemetry-ping');
  const timeEl = document.getElementById('telemetry-time');
  
  if (!pingEl || !timeEl) return;
  
  // Update synchronized UTC time
  const updateTime = () => {
    const now = new Date();
    const utcStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    timeEl.textContent = utcStr;
  };
  
  // Simulated latency variance
  const updatePing = () => {
    const randomPing = Math.floor(Math.random() * 15) + 10; // 10ms - 25ms
    pingEl.textContent = `${randomPing}ms`;
  };
  
  updateTime();
  updatePing();
  setInterval(updateTime, 1000);
  setInterval(updatePing, 3000);
};

// 2. Interactive Terminal setup
const initTerminal = () => {
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');
  
  if (!terminalInput || !terminalBody) return;
  
  const addLine = (text, type = '') => {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    if (type === 'command') {
      line.innerHTML = `<span class="term-prompt">ronit-sec-term:~$</span> ${text}`;
    } else {
      line.innerHTML = text;
    }
    
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  };
  
  const handleCommand = (rawInput) => {
    const input = rawInput.trim();
    const parts = input.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    addLine(rawInput, 'command');
    
    if (input === '') return;
    
    switch (cmd) {
      case 'help':
        addLine(`Available commands:<br>
  <span class="term-cyan">about</span>       - Brief professional summary<br>
  <span class="term-cyan">skills</span>      - Highlight technical skillset<br>
  <span class="term-cyan">nmap</span>        - Run local port/service scan demonstration<br>
  <span class="term-cyan">decrypt [str]</span> - Decrypt a Base64 string<br>
  <span class="term-cyan">neofetch</span>     - System specifications profile<br>
  <span class="term-cyan">contact</span>     - View secure/active contact details<br>
  <span class="term-cyan">clear</span>       - Clear terminal history`);
        break;
        
      case 'about':
        addLine(`Entry-level cybersecurity professional with hands-on SOC, penetration testing, and digital forensics experience. Ranked in the <span class="term-green">Top 1.5% nationally</span> in HEC NSCT 2026. Specializes in building machine learning-powered intrusion detection and automating audit workflows.`);
        break;
        
      case 'skills':
        addLine(`[+] <span class="term-bold">Security:</span> SOC Monitoring, Incident Response, Threat Hunting, Vulnerability Assessment, Digital Forensics, MITRE ATT&CK<br>
[+] <span class="term-bold">Tools:</span> Kali Linux, Burp Suite, Wireshark, Nmap, Metasploit, Autopsy, Volatility, Splunk/SIEM<br>
[+] <span class="term-bold">Coding:</span> Python, Bash, SQL, JavaScript, C/C++`);
        break;
        
      case 'nmap':
        addLine(`<span class="term-yellow">Starting Nmap 7.92 ( https://nmap.org ) at ${new Date().toISOString().replace('T', ' ').substring(0, 19)}</span><br>
Nmap scan report for localhost (127.0.0.1)<br>
Host is up (0.00015s latency).<br>
Not shown: 996 closed tcp ports (conn-refused)<br>
PORT     STATE SERVICE  VERSION<br>
22/tcp   open  ssh      OpenSSH 8.9p1 (Protocol 2.0)<br>
80/tcp   open  http     Nginx 1.18.0<br>
443/tcp  open  ssl/http Nginx 1.18.0 (SSL/TLS Active)<br>
3306/tcp open  mysql    MySQL 8.0.28<br><br>
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel<br><br>
Nmap done: 1 IP address (1 host up) scanned in 0.45 seconds`);
        break;
        
      case 'decrypt':
        if (args.length < 1) {
          addLine(`<span class="term-red">Error: missing argument. Usage: decrypt [base64_string]</span>`);
        } else {
          try {
            const decoded = atob(args[0]);
            addLine(`Decryption Successful! Result: <span class="term-green">${decoded}</span>`);
            // Check if they solved the flag
            if (args[0] === 'U2VjdXJpdHlSZWNydWl0ZXJfMjAyNg==') {
              triggerChallengeSuccess();
            }
          } catch (e) {
            addLine(`<span class="term-red">Error: Invalid Base64 payload encoding.</span>`);
          }
        }
        break;
        
      case 'neofetch':
        addLine(`<div class="terminal-output"><span class="term-cyan">   /---\   </span> <span class="term-bold">ronit@security-analyst</span>
<span class="term-cyan">  | o o |  </span> ----------------------
<span class="term-cyan">   \---/   </span> OS: Sukkur IBA Linux x86_64
<span class="term-cyan">    / \    </span> Role: SOC Analyst / Pen Tester / Forensics
<span>             </span> NSCT Rank: Top 1.5% (98.5th Percentile)
<span>             </span> IDS Accuracy: ~88% Threat Detection Accuracy
<span>             </span> Shell: bash / python3 / javascript
<span>             </span> Active Tasks: Incident Response & Automating Audits</div>`);
        break;
        
      case 'contact':
        addLine(`Active communication channels:<br>
  - Email: <span class="term-cyan">ronit.raii2004@gmail.com</span><br>
  - GitHub: <span class="term-cyan">github.com/ronitraii</span><br>
  - LinkedIn: <span class="term-cyan">linkedin.com/in/ronitganglani</span>`);
        break;
        
      case 'clear':
        terminalBody.innerHTML = '';
        break;
        
      default:
        addLine(`<span class="term-red">Command not found: '${cmd}'. Type 'help' to see list of options.</span>`);
    }
  };
  
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      handleCommand(val);
      terminalInput.value = '';
    }
  });
};

// Helper function to update the contact section challenge directly from terminal solving
const triggerChallengeSuccess = () => {
  const resultEl = document.getElementById('challenge-result');
  const inputEl = document.getElementById('challenge-input');
  if (resultEl && inputEl) {
    inputEl.value = 'SecurityRecruiter_2026';
    resultEl.className = 'challenge-result challenge-success';
    resultEl.innerHTML = '<i class="fas fa-check-circle"></i> FLAG_CAPTURED: ACCESS_GRANTED. <br>Congratulations! You decrypted the hash successfully. Let\'s secure the connection! Reach out directly: <a href="mailto:ronit.raii2004@gmail.com" style="color: #4fda9e; text-decoration: underline;">ronit.raii2004@gmail.com</a>';
  }
};

// 3. Recruiter Challenge setup
const initChallenge = () => {
  const inputEl = document.getElementById('challenge-input');
  const btnEl = document.getElementById('challenge-btn');
  const resultEl = document.getElementById('challenge-result');
  
  if (!inputEl || !btnEl || !resultEl) return;
  
  const checkFlag = () => {
    const val = inputEl.value.trim();
    if (val === 'SecurityRecruiter_2026') {
      resultEl.className = 'challenge-result challenge-success';
      resultEl.innerHTML = '<i class="fas fa-check-circle"></i> FLAG_CAPTURED: ACCESS_GRANTED. <br>Congratulations! You decrypted the hash successfully. Let\'s secure the connection! Reach out directly: <a href="mailto:ronit.raii2004@gmail.com" style="color: #4fda9e; text-decoration: underline;">ronit.raii2004@gmail.com</a>';
    } else if (val.toLowerCase() === 'securityrecruiter_2026') {
      resultEl.className = 'challenge-result challenge-success';
      resultEl.innerHTML = '<i class="fas fa-check-circle"></i> FLAG_CAPTURED (Case-sensitive mismatch resolved). <br>Access granted. Reach out directly: <a href="mailto:ronit.raii2004@gmail.com" style="color: #4fda9e; text-decoration: underline;">ronit.raii2004@gmail.com</a>';
    } else {
      resultEl.className = 'challenge-result challenge-error';
      resultEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i> ACCESS_DENIED: Invalid flag decrypter. Hint: It is a Base64 encoding. Try decoding the string!';
    }
  };
  
  btnEl.addEventListener('click', checkFlag);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      checkFlag();
    }
  });
};

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
