document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("forgot-username").value;
  
    // Dummy users storage (in real app, this should query a DB)
    const validUsers = {
      "user1": "elf",
      "user2": "human",
      "user3": "orc"
    };
  
    // Check if username exists
    if (validUsers[username]) {
      // Here you can implement your reset logic
      alert(`Password reset link sent to ${username}'s email.`);
    } else {
      alert("This account doesn't exist.");
    }
  });
  