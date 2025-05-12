document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUsers = {
    "user1": "elf",
    "user2": "human",
    "user3": "orc"
  };

  if (validUsers[username] && validUsers[username] === password) {
    
    if (username === "user1") {
      window.location.href = "dashboard.html";
    } else if (username === "user3") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    // Display error message
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-text").innerText = "This account doesn't exist or incorrect password.";
  }
});
