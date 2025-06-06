document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons in the four-button-grid
    const buttons = document.querySelectorAll('.four-button-grid .button');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the text content of the button to determine which page to navigate to
            const buttonText = this.textContent.trim();
            
            // Create the page name based on the button text
            const pageName = buttonText.toLowerCase().replace(/\s+/g, '-');
            
            // Navigate to the corresponding page
            window.location.href = `${pageName}.html`;
        });
    });
}); 