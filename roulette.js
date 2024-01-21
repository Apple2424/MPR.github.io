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
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            spinning = false;
            alert(`Congratulations! You won: ${getRandomReward()}`);
        }, 3000);
    }
}

function getRandomReward() {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    return rewards[randomIndex];
}
