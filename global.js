// Toggle dropdown on profile click
document.querySelector('.profile-container')?.addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent immediate outside click from closing it
  const dropdown = document.querySelector('.profile-dropdown');
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  }
});

// Close dropdown if clicking outside
document.addEventListener('click', function (e) {
  const container = document.querySelector('.profile-container');
  const dropdown = document.querySelector('.profile-dropdown');
  if (container && dropdown && !container.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

   // Logo click returns home
   document.getElementById('homeButton').addEventListener('click', () => {
    window.location.href = "dashboard.html";
  });
  
  function toggleMenu() {
    const navButtons = document.getElementById('nav-buttons');
    navButtons.classList.toggle('open');
  }
  