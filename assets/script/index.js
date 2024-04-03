function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
    checkAlarm(now);
}

function setAlarm(event) {
    event.preventDefault();
    const hour = document.getElementById('alarm-hour').value.padStart(2, '0');
    const minute = document.getElementById('alarm-minute').value.padStart(2, '0');
    window.alarmTime = new Date();
    window.alarmTime.setHours(hour);
    window.alarmTime.setMinutes(minute);
    window.alarmTime.setSeconds(0);
    // Update the alarm set time display
    document.getElementById('alarm-time').textContent = `${hour}:${minute}`;
}

function checkAlarm(currentTime) {
    if (window.alarmTime && currentTime.getHours() === window.alarmTime.getHours() && currentTime.getMinutes() === window.alarmTime.getMinutes()) {
        document.getElementById('alarm-sound').play();
        // Clear the alarm set time display
        document.getElementById('alarm-set').textContent = '';
        window.alarmTime = undefined;  // Reset the alarm time
    }
}

document.getElementById('alarm-form').addEventListener('submit', setAlarm);
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time right away
