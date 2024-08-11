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
    { text: "Loading...", duration: 500 },
    { text: "Loading...", duration: 500 },
    { text: "Loading...", duration: 500 },
    { text: "Loading...", duration: 500 },
    
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

function generateRandomCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateReferralCode() {
  const userId = Math.floor(Math.random() * 1000000); // Simulate a unique user ID

  // Check if the code is already stored in localStorage
  const storedCode = localStorage.getItem('referralCode');
  if (storedCode) {
      document.getElementById('referral-code').textContent = storedCode;
      activateShareButton();
      return;
  }

  const uniqueCode = generateRandomCode(10); // Generate a random 10-character code
  const telegramBotAddress = 'https://t.me/GoldCODEDBot';
  const referralLink = `${telegramBotAddress}?start=${uniqueCode}-${userId}`;

  // Store the code in localStorage
  localStorage.setItem('referralCode', referralLink);

  // Display the generated code
  document.getElementById('referral-code').textContent = referralLink;

  // Activate the Share button
  activateShareButton();
}

function activateShareButton() {
  const shareBtn = document.getElementById('share-btn');
  shareBtn.disabled = false;
  shareBtn.style.cursor = 'pointer';
  shareBtn.style.backgroundColor = '#007bff';
}

function shareReferralCode() {
  const referralCode = document.getElementById('referral-code').textContent;
  if (referralCode !== 'Your referral link will appear here') {
      const message = `Check out my referral link: ${referralCode}`;
      const encodedMessage = encodeURIComponent(message);
      const telegramShareURL = `https://t.me/share/url?url=${encodedMessage}`;
      window.open(telegramShareURL, '_blank');

      // Set a flag in localStorage to indicate the code has been shared
      localStorage.setItem('codeShared', 'true');
  }
}

// On page load, check if there's already a stored code and display it
window.onload = function() {
  const storedCode = localStorage.getItem('referralCode');
  if (storedCode) {
      document.getElementById('referral-code').textContent = storedCode;
      activateShareButton();
  }
};

    // Check if the redeem button was already clicked and disabled
    const redeemClicked = localStorage.getItem('redeemClicked');
    if (redeemClicked === 'true') {
        document.getElementById('redeem-btn').disabled = true;
    }

function updateScore(value) {
    let currentScore = parseInt(localStorage.getItem('score')) || 0;
    currentScore += value;
    localStorage.setItem('score', currentScore);
    window.location.href = 'index.html';
}

const redeemBtn = document.getElementById('redeem-btn');
redeemBtn.disabled = true;

// Set a flag in localStorage to indicate that the redeem button has been clicked
localStorage.setItem('redeemClicked', 'true');


