document.addEventListener('DOMContentLoaded', () => {
    // Get the form element by its ID
    const form = document.getElementById('contact-form');

    // Add an event listener for form submission
    form.addEventListener('submit', (event) => {
        // Get the values of the form fields
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const address = form.elements['address'].value;
        const phone = form.elements['phone'].value;

        // Define a pattern for validating an 11-digit phone number
        const phonePattern = /^[0-9]{11}$/;

        // Check if the phone number matches the pattern
        if (!phonePattern.test(phone)) {
            // Show an alert if the phone number is invalid
            alert('Please enter a valid 11-digit phone number.');
            // Prevent form submission if validation fails
            event.preventDefault();
        }
    });
});
