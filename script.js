/*
========================================
ON MEDIA CO - MAIN JAVASCRIPT
Handles mobile menu, smooth scrolling, and form validation
========================================
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    /*
    ========================================
    MOBILE MENU TOGGLE
    Handles hamburger menu functionality
    ========================================
    */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu on button click
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    /*
    ========================================
    SMOOTH SCROLLING
    Smooth scroll for anchor links
    ========================================
    */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply to on-page anchors (not just #)
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    // Scroll to target with offset for fixed header
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    /*
    ========================================
    HEADER SCROLL EFFECT
    Add shadow/background to header on scroll
    ========================================
    */
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    /*
    ========================================
    VIDEO ITEM CLICK HANDLING
    Add click handlers to video items (for future modal/lightbox)
    ========================================
    */
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // For now, just log - you can add lightbox/modal here
            const title = this.querySelector('.video-title').textContent;
            console.log('Clicked on video: ' + title);
            
            // Future: Open video in modal/lightbox
            // openVideoModal(videoUrl);
        });
        
        // Add hover effect (pointer cursor)
        item.style.cursor = 'pointer';
    });
    
    /*
    ========================================
    LAZY LOADING PLACEHOLDER
    If you add actual images later, uncomment this for lazy loading
    ========================================
    */
    // const images = document.querySelectorAll('img[data-src]');
    // 
    // const imageObserver = new IntersectionObserver(function(entries) {
    //     entries.forEach(function(entry) {
    //         if (entry.isIntersecting) {
    //             const img = entry.target;
    //             img.src = img.dataset.src;
    //             img.removeAttribute('data-src');
    //             imageObserver.unobserve(img);
    //         }
    //     });
    // });
    // 
    // images.forEach(function(img) {
    //     imageObserver.observe(img);
    // });
    
});

/*
========================================
UTILITY FUNCTIONS
Helper functions used throughout the site
========================================
*/

// Debounce function for scroll/resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get element position relative to viewport
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        bottom: rect.bottom + window.scrollY,
        right: rect.right + window.scrollX
    };
}