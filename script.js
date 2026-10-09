// System Loader Animation
const systemLoader = document.getElementById('systemLoader');

function initSystemLoader() {
    // Hide loader after animation completes
    setTimeout(() => {
        systemLoader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2500);
}

// Typing Animation
function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    
    type();
}

// Initialize typing animation after loader
function initTypingAnimation() {
    const typingElement = document.getElementById('typingText');
    const name = 'Lahiru Senarathna';
    
    if (typingElement) {
        setTimeout(() => {
            typeWriter(typingElement, name, 100);
        }, 300);
    }
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    lastScroll = currentScroll;
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat-item, .contact-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Show terminal-like success message
        console.log('%c[OK] Message received', 'color: #00ff00; font-weight: bold;');
        console.log('%cForm Data:', 'color: #ff0000; font-weight: bold;', formData);
        
        // Create a terminal-style notification
        showTerminalNotification('Message sent successfully!', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// System notification
function showTerminalNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'system-notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #111111;
        border: 1px solid #ff0000;
        padding: 15px 20px;
        color: #ff0000;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        z-index: 10000;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = `[${type === 'success' ? 'OK' : 'ERROR'}] ${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Skill cards hover effect enhancement
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


// Initialize everything when page loads
window.addEventListener('load', () => {
    // Start system loader
    initSystemLoader();
    
    // Initialize typing animation after loader
    setTimeout(() => {
        initTypingAnimation();
    }, 2800);
    
    // Fade in body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message
console.log('%c[SYSTEM] Access granted', 'color: #ff0000; font-size: 16px; font-weight: bold;');
console.log('%cWelcome to the system. All protocols active.', 'color: #b0b0b0; font-size: 12px;');
console.log('%cBuilt with security in mind by Lahiru Senarathna', 'color: #666666; font-size: 10px;');

// Add glitch effect on hover for logo (optional enhancement)
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s';
    });
    
    logo.addEventListener('animationend', function() {
        this.style.animation = '';
    });
}

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0%, 100% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
    }
`;
document.head.appendChild(glitchStyle);

// Add subtle scanline effect (optional)
function createScanline() {
    const scanline = document.createElement('div');
    scanline.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(255, 0, 0, 0.1);
        z-index: 9999;
        pointer-events: none;
        animation: scanline 8s linear infinite;
    `;
    document.body.appendChild(scanline);
}

// Scanline animation
const scanlineStyle = document.createElement('style');
scanlineStyle.textContent = `
    @keyframes scanline {
        0% {
            top: 0;
            opacity: 0.1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            top: 100vh;
            opacity: 0.1;
        }
    }
`;
document.head.appendChild(scanlineStyle);

// Initialize scanline effect
createScanline();
