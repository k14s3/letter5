// Date the relationship started
const startDate = new Date('2024-07-13T15:00:00');

// Function to update the days known and the stopwatch
function updateTime() {
    const now = new Date();
    const timeDiff = now - startDate;
    
    // Calculate days known
    const daysKnown = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('days-known').textContent = daysKnown;

    // Calculate hours and minutes for the stopwatch
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    document.getElementById('stopwatch').textContent = `${hours} hours and ${minutes} minutes`;
}

// Update the time every minute
setInterval(updateTime, 60000);
updateTime();
