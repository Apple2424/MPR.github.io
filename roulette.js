const rewards = [
    "Jackpot",
    "$10,000",
    "$100",
    "$50",
    "$500",
    "Try Again"
];

let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;
        const wheel = document.getElementById('wheel');
        const randomDegree = Math.floor(Math.random() * 360) + 360 * 5;
        
        // Add additional spins for a more visually appealing effect
        const totalSpins = 5;
        const totalRotation = randomDegree + 360 * totalSpins;

        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${totalRotation}deg)`;

        // Allow spinning animation to finish before resetting spinning flag
        setTimeout(() => {
            spinning = false;
            wheel.style.transition = ''; // Reset transition for future spins
            alert(`Congratulations! You won: ${getRandomReward()}`);
        }, 3000 * totalSpins);
    }
}

function getRandomReward() {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    return rewards[randomIndex];
}
