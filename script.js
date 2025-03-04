// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle (Hamburger Menu)
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('change', () => {
    if (navToggle.checked) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Collect form input values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Check if the fields are filled
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }
    
    // If everything is good, submit the form (or send data via an API)
    alert('Message sent successfully!');
    form.reset(); // Reset form after submission
});

// Scroll-to-Top Button Visibility & Functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    // Show button when scrolled down
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation Toggle (Hamburger Menu)
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
