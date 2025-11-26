// ========================================
// UMESHA JAYAKODY PORTFOLIO - JAVASCRIPT
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // TYPING EFFECT FOR POSITIONS
    // ========================================
    const typingText = document.querySelector('.typing-text');
    const positions = [
        'Software Engineer',
        'Web Developer',
        'Data Analyst',
        'Frontend Developer'
    ];
    
    let positionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentPosition = positions[positionIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPosition.substring(0, charIndex);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                positionIndex = (positionIndex + 1) % positions.length;
                setTimeout(typeEffect, 500);
                return;
            }
        } else {
            typingText.textContent = currentPosition.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentPosition.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing effect
    typeEffect();
    
    // ========================================
    // SMOOTH SCROLLING
    // ========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ========================================
    function updateActiveNav() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s forwards';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // ========================================
    // CONTACT FORM HANDLING
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            };
            
            // Display success message
            alert(`Thank you for your message, ${formData.name}! I will get back to you soon at ${formData.email}.`);
            
            // Reset form
            this.reset();
            
            // Here you can add code to send the form data to a server
            // Example using fetch API:
            /*
            fetch('your-server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            */
        });
    }

    // ========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ========================================
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 217, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.1)';
        }
    });

    // ========================================
    // PROJECT CARD TILT EFFECT (Optional)
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========================================
    // TYPING EFFECT FOR HERO SUBTITLE (Optional)
    // ========================================
    const heroSubtitle = document.querySelector('.hero h2');
    
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }

    // ========================================
    // SKILL ITEMS ANIMATION
    // ========================================
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // ========================================
    // LAZY LOADING IMAGES (If you add images later)
    // ========================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ========================================
    // PRINT CONSOLE MESSAGE
    // ========================================
    console.log('%c👋 Welcome to Umesha Jayakody\'s Portfolio!', 
        'color: #00d9ff; font-size: 20px; font-weight: bold;');
    console.log('%cLooking for a talented frontend developer? Let\'s connect!', 
        'color: #ec4899; font-size: 14px;');
    console.log('%c📧 umeshaudayangani2001@gmail.com', 
        'color: #cbd5e1; font-size: 12px;');

    // ========================================
    // PERFORMANCE MONITORING (Optional)
    // ========================================
    window.addEventListener('load', function() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                        window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });

});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// CONTACT FORM HANDLING WITH EMAILJS
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Change button text to show sending state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        emailjs.sendForm('service_qg6sshq', 'template_8gojbca', this)
            .then(function() {
                // Success
                alert('✅ Message sent successfully! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                // Error
                console.error('EmailJS Error:', error);
                alert('❌ Failed to send message. Please try emailing me directly at umeshaudayangani2001@gmail.com');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}
