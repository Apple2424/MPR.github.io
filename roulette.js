// roulette.js

// Function to spin the wheel
function spinWheel() {
    // Get the wheel element by its ID
    const wheel = document.getElementById('wheel');

    // Calculate a random rotation between 5 and 10 spins
    const randomSpins = Math.floor(Math.random() * 6) + 5;
    const totalRotation = 360 * randomSpins;

    // Apply the rotation to the wheel
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    // Allow spinning animation to finish before resetting transition
    setTimeout(() => {
        wheel.style.transition = '';
        alert('You won something!'); // Replace this with your reward logic
    }, 3000 * randomSpins);
}
