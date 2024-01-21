document.addEventListener('DOMContentLoaded', function() {
    // This event is fired when the DOM is fully loaded.

    // Wait for 1 second and then initiate the fade-out animation.
    setTimeout(() => {
        fadeOutAndNavigate();
    }, 3000);
});

function fadeOutAndNavigate() {
    // Get the element to fade out (in this case, the div with class "fade-in").
    const fadeElement = document.querySelector('.fade-in');

    // Add a class to initiate the fade-out animation.
    fadeElement.classList.add('fade-out');

    // After a delay, navigate to the new page.
    setTimeout(() => {
        // Change the URL to the desired new page.
        window.location.href = 'play.html';
    }, 1000); // Adjust the delay time (in milliseconds) based on your preferences.
}
