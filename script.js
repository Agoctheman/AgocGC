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
      const message = `Check out my referral link. Enter and get 500 coins free: ${referralCode}`;
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

// Function to update the score
function updateScore(value) {
    let currentScore = parseInt(localStorage.getItem('score')) || 0;
    currentScore += value;
    localStorage.setItem('score', currentScore);
    window.location.href = 'index.html';
}

// Check if the redeem button was already clicked and disable it if so
const redeemClicked = localStorage.getItem('redeemClicked');
const redeemBtn = document.getElementById('redeem-btn');

if (redeemClicked === 'true') {
    redeemBtn.disabled = true;
} else {
    redeemBtn.disabled = false;
}

// Function to handle redeem button click
function handleRedeemClick() {

    // Set a flag in localStorage to indicate that the redeem button has been clicked
    localStorage.setItem('redeemClicked', 'true');
    redeemBtn.disabled = true; // Disable the button after it's clicked
}

// Attach the click event to the redeem button
redeemBtn.addEventListener('click', handleRedeemClick);

// Reset the score for new users if it's not already set
if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', '0'); // Start with a fresh score of 0
}

// Function to update the score for the Welcome button
function updateWelcomeScore(value) {
    let currentScore = parseInt(localStorage.getItem('score')) || 0;
    currentScore += value;
    localStorage.setItem('score', currentScore);
    window.location.href = 'index.html';
}

// Check if the Welcome button was already clicked and disable it if so
const welcomeClicked = localStorage.getItem('welcomeClicked');
const welcomeBtn = document.getElementById('welcome-btn');

if (welcomeClicked === 'true') {
    welcomeBtn.disabled = true;
} else {
    welcomeBtn.disabled = false;
    welcomeBtn.classList.add('active');
}

// Function to handle Welcome button click
function handleWelcomeClick() {
    // Update the score by a certain value when the button is clicked
    updateWelcomeScore(500);  // Example: increase score by 50

    // Set a flag in localStorage to indicate that the Welcome button has been clicked
    localStorage.setItem('welcomeClicked', 'true');
    welcomeBtn.disabled = true; // Disable the button after it's clicked
    welcomeBtn.classList.remove('active');
}

// Attach the click event to the Welcome button
welcomeBtn.addEventListener('click', handleWelcomeClick);


// Function to update the score for the Welcome button
function updateCheckScore(value) {
    let currentScore = parseInt(localStorage.getItem('score')) || 0;
    currentScore += value;
    localStorage.setItem('score', currentScore);
    window.location.href = 'index.html';
}

// Check if the Welcome button was already clicked and disable it if so
const checkClicked = localStorage.getItem('checkClicked');
const checkBtn = document.getElementById('check-btn');

if (checkClicked === 'true') {
    checkBtn.disabled = true;
} else {
    checkBtn.disabled = false;
    checkBtn.classList.add('active');
}

// Function to handle Welcome button click
function handleCheckClick() {
    // Update the score by a certain value when the button is clicked
    updateCheckScore(500);  // Example: increase score by 50

    // Set a flag in localStorage to indicate that the Welcome button has been clicked
    localStorage.setItem('checkClicked', 'true');
    checkBtn.disabled = true; // Disable the button after it's clicked
    checkBtn.classList.remove('active');
}

// Attach the click event to the Welcome button
checkBtn.addEventListener('click', handleCheckClick);
