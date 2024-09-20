// Stopwatch for hours, minutes, and seconds
function updateStopwatch() {
    const startDate = new Date('July 13, 2024 15:00:00');
    const now = new Date();
    const diffMs = now - startDate;
    
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    document.getElementById('stopwatch').textContent = `${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds`;
}

// Update every second
setInterval(updateStopwatch, 1000);
updateStopwatch(); // Run on page load
