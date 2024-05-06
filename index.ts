function startCountdown(targetDate: Date): number {
    const intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = targetDate.getTime() - currentTime;

        // Calculate remaining time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

        // Check if the countdown is over
        if (distance <= 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
        }
    }, 1000); // Update every second

    return intervalId;
}

// Set the target date for the countdown timer (Change this to your desired date)
const targetDate = new Date("2024-12-31T23:59:59");

// Start the countdown timer
const intervalId = startCountdown(targetDate);
