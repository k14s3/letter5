// Start date: July 13, 2024 at 3:00 PM
const startDate = new Date('2024-07-13T15:00:00');

// Function to update the stopwatch
function updateStopwatch() {
    const now = new Date();
    const timeDiff = now - startDate;

    // Calculate the days, hours, and minutes
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);

    // Update the stopwatch element
    document.getElementById('stopwatch').textContent = 
        `${days} days, ${hours} hours, and ${minutes} minutes.`;
}

// Update the stopwatch every minute
setInterval(updateStopwatch, 60000);
updateStopwatch();  // Initial call to display immediately
