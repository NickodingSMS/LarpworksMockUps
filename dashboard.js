// Dummy character data
const characters = [
    { name: "Elven Ranger", main: true, level: 5, unspentAP: 10, spentAP: 20 },
    { name: "Orc Berserker", main: false, level: 3, unspentAP: 5, spentAP: 15 },
    { name: "Human Wizard", main: false, level: 7, unspentAP: 12, spentAP: 30 }
  ];
  
  function renderCharacters(data) {
    const tableBody = document.getElementById("characterTableBody");
    tableBody.innerHTML = "";
  
    data.forEach((char, index) => {
        const row = document.createElement("tr");
      
        row.innerHTML = `
          <td>${char.name}</td>
          <td>${char.main ? "Yes" : "No"}</td>
          <td>${char.level}</td>
          <td>${char.unspentAP}</td>
          <td>${char.spentAP}</td>
          <td>
            <button class="icon-button edit-btn" data-index="${index}">✎</button>
            <button class="icon-button delete-btn" data-index="${index}">🗑️</button>
          </td>
        `;
      
        // Mobile row click goes to player view
        row.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            window.location.href = `player-view.html?char=${encodeURIComponent(char.name)}`;
          }
        });
      
        // Handle Edit button
        row.querySelector('.edit-btn').addEventListener('click', e => {
          e.stopPropagation();
          window.location.href = `player-view.html?char=${encodeURIComponent(char.name)}`;
        });
      
        // Handle Delete button
        row.querySelector('.delete-btn').addEventListener('click', e => {
          e.stopPropagation();
          characters.splice(index, 1);
          renderCharacters(characters);
        });
      
        tableBody.appendChild(row);
      });
      
  }

  
  renderCharacters(characters);
  
  // Create Character placeholder
  document.getElementById('createCharacter').addEventListener('click', () => {
    alert('Create Character functionality coming soon!');
  });
  
 