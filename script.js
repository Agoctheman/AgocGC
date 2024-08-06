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
    { text: "Loading puzzles...", duration: 3000 },
    { text: "Initiating scores...", duration: 1000 },
    { text: "Assigning Gold...", duration: 3000 },
    { text: "Complete.", duration: 1000 }
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


const tg = Telegram.WebApp;

// Show the back button
tg.BackButton.show();

// Check if the button is visible
tg.BackButton.isVisible;

// Click Event
const goBack = () => {
  // Callback code
};

tg.BackButton.onClick(goBack);

// Remove Click Event
tg.BackButton.offClick(goBack);

// Hide the back button
tg.BackButton.hide();

const tg = window.Telegram.WebApp;
tg.ready();

const tg = window.Telegram.WebApp;
tg.isExpanded;
tg.expand();
