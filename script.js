document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.style.display = 'none';
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const scoreDisplay = document.getElementById('score');
    const savedScore = localStorage.getItem('score') || 0;
    scoreDisplay.textContent = savedScore;
});

// Loading screen functionality
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  const progressBar = document.getElementById('progress');
  const loadingText = document.getElementById('loading-text');

  const loadingSteps = [
    { text: "Loading puzzles...", duration: 300 },
    { text: "Initiating scores...", duration: 300 },
    { text: "Assigning Gold...", duration: 300 },
    { text: "Complete.", duration: 500 }
  ];

  let currentStep = 0;
  const totalDuration = loadingSteps.reduce((sum, step) => sum + step.duration, 0);

  function updateLoadingScreen() {
    if (currentStep < loadingSteps.length) {
      const step = loadingSteps[currentStep];
      loadingText.textContent = step.text;

      setTimeout(() => {
        currentStep++;
        const progress = (currentStep / loadingSteps.length) * 100;
        progressBar.style.width = `${progress}%`;
        updateLoadingScreen();
      }, step.duration);
    } else {
      // Loading complete, show main content
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }
  }

  updateLoadingScreen();
});

const {
  bg_color,
  text_color,
  hint_color,
  button_color,
  button_text_color,
  secondary_bg_color,
} = Telegram.WebApp.themeParams;


const tg = window.Telegram.WebApp;
tg.isExpanded;
tg.expand();

  document.querySelectorAll('td').forEach(cell => {
      cell.addEventListener('mouseover', () => {
          cell.style.transform = 'scale(1.05)';
      });
      cell.addEventListener('mouseout', () => {
          cell.style.transform = 'scale(1)';
      });
  });