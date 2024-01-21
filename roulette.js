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
        
        // Calculate a random rotation between 5 and 10 spins
        const randomSpins = Math.floor(Math.random() * 6) + 5;
        const totalRotation = 360 * randomSpins;

        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${totalRotation}deg)`;

        // Allow spinning animation to finish before resetting spinning flag
        setTimeout(() => {
            spinning = false;
            wheel.style.transition = ''; // Reset transition for future spins
            alert(`Congratulations! You won: ${getRandomReward()}`);
        }, 3000 * randomSpins);
    }
}

function getRandomReward() {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    return rewards[randomIndex];
}
