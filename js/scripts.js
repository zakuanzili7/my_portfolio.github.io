/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    document.getElementById("year").textContent = new Date().getFullYear();

    AOS.init();
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    const texts = [
        "A creative UI/UX Designer.",
        "A Web & Mobile Developer."
    ];
    
    const originalText = "A passionate Full-Stack Developer.";
    
    let index = 0;
    let cycleCount = 0;
    const textElement = document.getElementById("rotating-text");
    
    function switchText() {
        // Apply fade-out effect
        textElement.classList.remove("fade-in");
        textElement.classList.add("fade-out");
    
        setTimeout(() => {
            // Check if we have completed one full cycle
            if (index < texts.length) {
                textElement.innerHTML = texts[index]; // Switch text
                index++;
            } else {
                textElement.innerHTML = originalText; // Reset to original text
                index = 0;
                cycleCount++;
            }
    
            // Reapply fade-in effect after the fade-out completes
            textElement.classList.remove("fade-out");
    
            // Force reflow to ensure animation restarts
            void textElement.offsetWidth;
    
            textElement.classList.add("fade-in");
    
        }, 500); // Wait for fade-out to complete before changing text
    }
    
    // Run every 5 seconds
    setInterval(switchText, 5000);

    var swiper = new Swiper(".testimonial-slider", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1, // Only one testimonial fully visible
        spaceBetween: 50, // Adds spacing between slides
        centeredSlides: true,
    });

});
