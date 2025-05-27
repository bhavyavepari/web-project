
// Splash Screen Logic
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const mainContent = document.getElementById("main-content");
  
    // Display the splash screen for 3 seconds
    setTimeout(() => {
      splash.style.opacity = "0"; // Fade out effect
      setTimeout(() => {
        splash.style.display = "none"; // Remove splash screen
        mainContent.classList.remove("hidden"); // Show main content
      }, 500); // Wait for fade out animation
    }, 5000); // Duration of splash screen
  });
  
  // Tab switching logic
// JavaScript for interactive options and form submission
document.getElementById('localBtn').addEventListener('click', () => switchOption('local'));
document.getElementById('airportBtn').addEventListener('click', () => switchOption('airport'));
document.getElementById('rentingBtn').addEventListener('click', () => switchOption('renting'));

function switchOption(option) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(option + 'Btn').classList.add('active');
    document.getElementById('packageSection').style.display = option === 'renting' ? 'block' : 'none';
}

document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        
        const pickup = document.getElementById('pickupLocation').value;
        const dropoff = document.getElementById('dropoffLocation').value;
        const phone = document.getElementById('phoneNumber').value;
        const date = document.getElementById('bookingDate').value;
        const option = document.querySelector('.option-btn.active').textContent;
        const package = document.getElementById('package')?.value || 'N/A';
        const otp = Math.floor(100000 + Math.random() * 900000);
        const distance = (Math.random() * 20 + 5).toFixed(2);
        const cost = (distance * 10).toFixed(2);
        const driver = "John Doe";
        const car = "Toyota Prius - AB123CD";
        const arrivalTime = (distance / 0.5).toFixed(0) + " min";
        
        document.getElementById('output').innerHTML = `
            <h2>Booking Summary</h2>
            <p><strong>Type:</strong> ${option}</p>
            <p><strong>Pickup:</strong> ${pickup}</p>
            <p><strong>Dropoff:</strong> ${dropoff}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Distance:</strong> ${distance} km</p>
            <p><strong>Cost:</strong> ₹${cost}</p>
            <p><strong>Driver:</strong> ${driver}</p>
            <p><strong>Car:</strong> ${car}</p>
            <p><strong>ETA:</strong> ${arrivalTime}</p>
        `;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('otp-box').innerHTML = `OTP: <strong>${otp}</strong>`;
        document.getElementById('otp-box').style.display = 'block';
    }, 2000);
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


