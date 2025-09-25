// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation State
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initial call

    // Comparison Section Toggle
    const comparisonToggles = document.querySelectorAll('.comparison-toggle .toggle-btn');
    const comparisonViews = document.querySelectorAll('.comparison-view');

    comparisonToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetView = this.getAttribute('data-view');
            
            // Remove active class from all toggles and views
            comparisonToggles.forEach(t => t.classList.remove('active'));
            comparisonViews.forEach(v => v.classList.remove('active'));
            
            // Add active class to clicked toggle
            this.classList.add('active');
            
            // Show corresponding view
            const targetElement = document.getElementById(targetView);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });

    // Tools Section Toggle
    const toolsToggles = document.querySelectorAll('.tools-toggle .toggle-btn');
    const toolsViews = document.querySelectorAll('.tools-view');

    toolsToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetTool = this.getAttribute('data-tool');
            
            // Remove active class from all toggles and views
            toolsToggles.forEach(t => t.classList.remove('active'));
            toolsViews.forEach(v => v.classList.remove('active'));
            
            // Add active class to clicked toggle
            this.classList.add('active');
            
            // Show corresponding view
            const targetElement = document.getElementById(targetTool);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and elements for animation
    const animatedElements = document.querySelectorAll('.overview-card, .tool-card, .takeaway, .focus-item, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to interactive elements
    const interactiveCards = document.querySelectorAll('.overview-card, .tool-card, .takeaway, .focus-item, .step');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Fade in hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }
    });

    // Add tab navigation for accessibility
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add click analytics (placeholder for future implementation)
    function trackClick(elementType, elementId) {
        // This is where you could add analytics tracking
        console.log(`Clicked: ${elementType} - ${elementId}`);
    }

    // Track button clicks
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackClick('toggle-button', this.getAttribute('data-view') || this.getAttribute('data-tool'));
        });
    });

    // Add error handling for missing elements
    function safeQuerySelector(selector) {
        try {
            return document.querySelector(selector);
        } catch (error) {
            console.warn(`Element not found: ${selector}`);
            return null;
        }
    }

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        updateActiveNavigation();
    }, 100));

    console.log('SAST & SCA Guide initialized successfully!');
});

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Note: You would need to create a service worker file for this to work
        // navigator.serviceWorker.register('/sw.js');
    });
}
