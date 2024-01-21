// roulette.js

// Define an array of rewards
const rewards = [
    'Jackpot',
    '$10,000',
    '$100,000',
    'Free Spin',
    '$500',
    'Mystery Prize',
    'Double Your Bet',
    '$50,000',
    'Lose a Turn',
    '$1,000,000'
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

    // Calculate the angle between rewards
    const angleBetweenRewards = 360 / rewards.length;

    // Calculate the reward index based on the normalized rotation
    const rewardIndex = Math.floor(normalizedRotation / angleBetweenRewards);

    // Get the reward from the array
    const reward = rewards[rewardIndex];

    // Update the content on the page with the reward
    document.getElementById('reward-display').textContent = `Congratulations! You won: ${reward}`;
}

// Function to initialize the wheel with specific rewards
function initializeWheel() {
    const wheel = document.getElementById('wheel');
    const rewardDisplay = document.getElementById('reward-display');

    // Clear the existing content in the wheel
    wheel.innerHTML = '';

    // Add two specific rewards to the wheel
    const rewardsToDisplay = ['Jackpot', '$10,000']; // You can change these rewards

    // Calculate the angle between rewards
    const angleBetweenRewards = 360 / rewards.length;

    // Calculate the angle for the center of the circle
    const centerAngle = (angleBetweenRewards * rewardsToDisplay.length) / 2;

    // Loop through the specified rewards to create lines and labels
    rewardsToDisplay.forEach((reward, index) => {
        const line = document.createElement('div');
        line.className = 'line';
        const lineRotation = (index * angleBetweenRewards) - centerAngle;
        line.style.transform = `rotate(${lineRotation}deg)`;
        wheel.appendChild(line);

        const label = document.createElement('div');
        label.className = 'reward-label';
        const labelRotation = ((index + 0.5) * angleBetweenRewards) - centerAngle;
        label.textContent = reward;
        label.style.transform = `rotate(${labelRotation}deg)`;
        wheel.appendChild(label);
    });

    // Display the rewards on the page in the middle of the wheel
    const rewardDisplayRotation = 90;
    rewardDisplay.style.transform = `rotate(${rewardDisplayRotation}deg)`;
}

// Initialize the wheel when the page loads
initializeWheel();


