// Function to toggle the theme
function toggleTheme() {
    const body = document.body; // Get the body element
    body.classList.toggle('dark'); // Toggle the 'dark' class

    // Optional: Change button text based on theme
    const button = document.getElementById('theme_button');
    if (body.classList.contains('dark')) {
        button.textContent = 'Switch to Light Theme'; // Update button text for dark theme
    } else {
        button.textContent = 'Switch to Dark Theme'; // Update button text for light theme
    }
}

// Add event listener to the button
document.getElementById('theme_button').addEventListener('click', toggleTheme);