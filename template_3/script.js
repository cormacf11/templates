document.addEventListener('DOMContentLoaded', () => {
    // Get references to the forms by their IDs
    const feedbackForm = document.getElementById('feedbackForm');
    const commentsForm = document.getElementById('commentsForm');
    const contactForm = document.getElementById('contactForm');

    // Add event listener for feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
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
