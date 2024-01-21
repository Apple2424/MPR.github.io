// roulette.js

// Define an array of rewards
const rewards = [
    'Jackpot',
    '$10,000',
    '$100,000',
    // Add more rewards as needed
];

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
        displayReward(totalRotation);
    }, 3000 * randomSpins);
}

// Function to display the reward based on the wheel's rotation
function displayReward(rotation) {
    // Calculate the normalized rotation
    const normalizedRotation = (rotation % 360 + 360) % 360;

    // Calculate the reward index based on the normalized rotation
    const rewardIndex = Math.floor((normalizedRotation / 360) * rewards.length);

    // Get the reward from the array
    const reward = rewards[rewardIndex];

    alert(`Congratulations! You won: ${reward}`);
}
