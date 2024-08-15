document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    // Load saved data from localStorage
    const savedContactData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedContactData) {
        contactForm.name.value = savedContactData.name || '';
        contactForm.email.value = savedContactData.email || '';
        contactForm.address.value = savedContactData.address || '';
        contactForm.phone.value = savedContactData.phone || '';
        contactForm.message.value = savedContactData.message || '';
    }

    // Save data to localStorage before the user leaves the page
    window.addEventListener('beforeunload', function () {
        const contactFormData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            address: contactForm.address.value,
            phone: contactForm.phone.value,
            message: contactForm.message.value
        };

        localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Function to validate phone number format
    function validatePhone(phone) {
        const phonePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
        return phonePattern.test(phone);
    }

    // Clear form inputs on form submission if validation passes
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const email = contactForm.email.value;
        const phone = contactForm.phone.value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return; // Exit the function if the email is invalid
        }

        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return; // Exit the function if the phone number is invalid
        }

        // Clear the form inputs if validation passes
        contactForm.name.value = '';
        contactForm.email.value = '';
        contactForm.address.value = '';
        contactForm.phone.value = '';
        contactForm.message.value = '';

        // Clear the localStorage
        localStorage.removeItem('contactFormData');
    });
});

// jQuery to handle theme toggle
$(document).ready(function() {
    const $themeToggle = $('#theme-toggle');

    // Function to apply the theme
    const applyTheme = (theme) => {
        console.log(`Applying theme: ${theme}`);
        if (theme === 'dark') {
            $('body').addClass('dark-mode');
            $themeToggle.text('Light Mode');
            console.log('Dark mode applied');
        } else {
            $('body').removeClass('dark-mode');
            $themeToggle.text('Dark Mode');
            console.log('Dark mode removed');
        }
    };

    // Event listener for the theme toggle button
    $themeToggle.on('click', function() {
        console.log('Theme toggle clicked');
        const currentTheme = $('body').hasClass('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Set initial button text based on default theme
        $themeToggle.text('Dark Mode');
    }
});

// jQuery to handle countdown timer
$(document).ready(function() {
    // Function to update the countdown
    function updateCountdown() {
        const offerEndDate = new Date('September 16, 2024 23:59:00').getTime();
        const now = new Date().getTime();
        const timeRemaining = offerEndDate - now;

        if (timeRemaining >= 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            $('#countdown').text(`${days}d ${hours}h ${minutes}m ${seconds}s remaining`);
        } else {
            $('#offer-banner').html('<h2>Offer Expired</h2><p>Sorry, this offer has expired.</p>');
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});

// jQuery to handle carousel slideshow
$(document).ready(function() {
    let slideIndex = 0; // Initialize the slide index to 0
    showSlides(); // Call the showSlides function to start the slideshow

    // Function to display the slides in a carousel
    function showSlides() {
        const slides = $(".carousel-slide"); // Select all elements with the class 'carousel-slide'
        
        // Hide all slides
        slides.each(function() {
            $(this).hide(); // Hide the current slide
        });

        slideIndex++; // Increment the slide index

        // If the slide index exceeds the number of slides, reset it to 1
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Show the current slide with a fade-in effect
        slides.eq(slideIndex - 1).fadeIn(800); // Use eq() to select the current slide and fade it in over 800ms

        // Set a timeout to call showSlides again after 3 seconds
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});