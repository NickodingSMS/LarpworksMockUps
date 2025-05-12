document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.player-dropdown'); 
  const characterInfo = document.querySelector('.character-info-section');
  const advantages = document.getElementById('advantagesSection');
  const historyJournal = document.getElementById('historyJournalSection');

  function hideAllSections() {
    characterInfo.style.display = 'none';
    advantages.style.display = 'none';
    historyJournal.style.display = 'none';
  }

  // Set initial state
  hideAllSections();
  characterInfo.style.display = 'flex';

  dropdown.addEventListener('change', (e) => {
    hideAllSections();
    const selected = e.target.value;
    if (selected === 'Character Information') {
      characterInfo.style.display = 'flex';
    } else if (selected === 'Advantages') {
      advantages.style.display = 'block';
    } else if (selected === 'Character History & Journal' || selected === 'Journal') {
      historyJournal.style.display = 'block';
    }
  });
});
