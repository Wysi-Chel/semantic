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

//send email function
function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_d8nu43o", "template_93qxbww", parms).then(alert("Email sent! "))
}

// // Send email function
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const serviceID = 'service_d8nu43o';
//     const templateID = 'template_ns0kjho';
  
//     emailjs.sendForm(serviceID, 'template_ns0kjho', this)
//       .then(() => {
//         alert('Your message was sent successfully!');
//         this.reset();
//       }, (error) => {
//         alert('FAILED... ' + JSON.stringify(error));
//       });
//   });
  
  // Function to update the current time every second
  function updateTime() {
    var now = new Date();
    var timeDiv = document.getElementById('currentTime');
    timeDiv.textContent = now.toLocaleTimeString();
  }
  
  // Call updateTime every second
  setInterval(updateTime, 1000);

  document.addEventListener('DOMContentLoaded', function () {
    /* ======== CAR SHOWCASE CAROUSEL ======== */
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel .next');
    const prevButton = document.querySelector('.carousel .prev');
    let currentSlideIndex = 0;
    
    // Set each slide's position
    const setSlidePosition = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
      });
    };
    setSlidePosition();
  
    // Function to move slides
    const moveToSlide = (targetIndex) => {
      const targetSlide = slides[targetIndex];
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    };
  
    // Next button event
    nextButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      moveToSlide(currentSlideIndex);
    });
  
    // Prev button event
    prevButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      moveToSlide(currentSlideIndex);
    });
  
    // Filter functionality for Car Showcase
    const carFilter = document.getElementById('car-filter');
    carFilter.addEventListener('change', function () {
      const filterValue = this.value;
      slides.forEach(slide => {
        if (filterValue === 'all' || slide.dataset.type === filterValue) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
      // Reset carousel position after filtering
      currentSlideIndex = 0;
      moveToSlide(currentSlideIndex);
    });
  
    /* ======== BOOKING SYSTEM: PRICE CALCULATOR ======== */
    const bookingForm = document.getElementById('booking-form');
    const pickupDateInput = document.getElementById('pickup-date');
    const dropoffDateInput = document.getElementById('dropoff-date');
    const carSelect = document.getElementById('car-select');
    const totalPriceDisplay = document.getElementById('total-price');
  
    function calculatePrice() {
      const pickupDate = new Date(pickupDateInput.value);
      const dropoffDate = new Date(dropoffDateInput.value);
      if (pickupDate && dropoffDate && dropoffDate > pickupDate) {
        const timeDiff = dropoffDate - pickupDate;
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const selectedOption = carSelect.options[carSelect.selectedIndex];
        const dailyRate = parseFloat(selectedOption.getAttribute('data-price'));
        const total = days * dailyRate;
        totalPriceDisplay.textContent = total.toFixed(2);
      } else {
        totalPriceDisplay.textContent = '0';
      }
    }
  
    // Update price when dates or car selection change
    pickupDateInput.addEventListener('change', calculatePrice);
    dropoffDateInput.addEventListener('change', calculatePrice);
    carSelect.addEventListener('change', calculatePrice);
  
    // Booking form submission event
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      calculatePrice(); // Ensure price is updated
      alert('Reservation confirmed! Total Price: $' + totalPriceDisplay.textContent);
      bookingForm.reset();
      totalPriceDisplay.textContent = '0';
    });
  });
  