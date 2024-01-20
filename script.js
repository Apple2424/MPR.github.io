function showAlert() {
    alert('Button Clicked!');
}

function fadeInComplete() {
    // This function is called when the fade-in animation is complete.
    // You can add additional actions here, such as fading out and navigating to a new page.
    fadeOutAndNavigate();
}

function fadeOutAndNavigate() {
    // Get the element to fade out (in this case, the div with class "fade-in").
    const fadeElement = document.querySelector('.fade-in');

    // Add a class to initiate the fade-out animation.
    fadeElement.classList.add('fade-out');

    // After a delay, navigate to a new page.
    setTimeout(() => {
        // Change the URL to the desired new page.
        window.location.href = 'new_page.html';
    }, 1000); // Adjust the delay time (in milliseconds) based on your preferences.
}
