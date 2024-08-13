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
