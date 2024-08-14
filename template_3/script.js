document.addEventListener('DOMContentLoaded', () => {
    // Get references to the forms by their IDs
    const feedbackForm = document.getElementById('feedbackForm');
    const commentsForm = document.getElementById('commentsForm');
    const contactForm = document.getElementById('contactForm');

    // Add event listener for feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            console.log('Feedback form submitted');
            // Validate UK phone number format
            const phone = document.getElementById('phone').value;
            const phonePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
            if (!phonePattern.test(phone)) {
                alert('Please enter a valid UK phone number.');
                e.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    // Add event listener for contact form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            // Validate form fields
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const address = form.elements['address'].value;
            const phone = form.elements['phone'].value;
            const password = form.elements['password'].value;

            // Validate UK phone number format
            const phonePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

            if (!phonePattern.test(phone)) {
                alert('Please enter a valid 11-digit phone number.');
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }
});

// Contact form data saved to localStorage
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    // Load saved data from localStorage
    const savedContactData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedContactData) {
        contactForm.name.value = savedContactData.name || '';
        contactForm.email.value = savedContactData.email || '';
        contactForm.address.value = savedContactData.address || '';
        contactForm.phone.value = savedContactData.phone || '';
    }

    // Save data to localStorage on input change
    contactForm.addEventListener('input', function () {
        const contactFormData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            address: contactForm.address.value,
            phone: contactForm.phone.value
        };

        localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
    });
});

// Feedback form data saved to localStorage
document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    // Load saved data from localStorage
    const savedFeedbackData = JSON.parse(localStorage.getItem('feedbackFormData'));
    if (savedFeedbackData) {
        feedbackForm.name.value = savedFeedbackData.name || '';
        feedbackForm.phone.value = savedFeedbackData.phone || '';
        feedbackForm.message.value = savedFeedbackData.message || '';
    }

    // Save data to localStorage on input change
    feedbackForm.addEventListener('input', function () {
        const feedbackFormData = {
            name: feedbackForm.name.value,
            phone: feedbackForm.phone.value,
            message: feedbackForm.message.value
        };

        localStorage.setItem('feedbackFormData', JSON.stringify(feedbackFormData));
    });
});

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