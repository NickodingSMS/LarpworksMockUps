document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
  
    // Dummy users storage (in real app, store this in a database)
    const validUsers = {
      "user1": "elf",
      "user2": "human",
      "user3": "orc"
    };
  
    // Check if username is already taken
    if (validUsers[username]) {
      // Display error if username is taken
      document.getElementById("error-message").style.display = "block";
      document.getElementById("error-text").innerText = "Username already exists!";
    } else {
      // Add new user
      validUsers[username] = password;
      // Redirect to login page after successful sign up
      window.location.href = "login.html"; // Placeholder for actual redirect
    }
  });
  