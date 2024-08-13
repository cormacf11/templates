document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form and theme toggle button by their IDs
    const form = document.getElementById('contact-form');
    const themeToggle = document.getElementById('theme-toggle');

    // Load the stored theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        // If a theme is stored, apply it to the body and update the toggle button text
        document.body.classList.add(currentTheme);
        themeToggle.textContent = currentTheme === 'dark-mode' ? '☀️' : '🌙';
    } else {
        // If no theme is stored, set the toggle button text to the default (light mode)
        themeToggle.textContent = '🌙';
    }

    // Add an event listener for form submission
    form?.addEventListener('submit', (event) => {
        // Get form field values
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const address = form.elements['address'].value;
        const phone = form.elements['phone'].value;
        const password = form.elements['password'].value;

        // Define a pattern for validating an 11-digit phone number
        const phonePattern = /^[0-9]{11}$/;

        // Validate the phone number
        if (!phonePattern.test(phone)) {
            // Show an alert if the phone number is invalid
            alert('Please enter a valid 11-digit phone number.');
            // Prevent form submission if validation fails
            event.preventDefault();
        }
    });

    // Add an event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        // Toggle the dark mode class on the body
        document.body.classList.toggle('dark-mode');
        // Check if dark mode is currently enabled
        const isDarkMode = document.body.classList.contains('dark-mode');
        // Update the toggle button text based on the current theme
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        // Store the current theme preference in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark-mode' : '');
    });
});
