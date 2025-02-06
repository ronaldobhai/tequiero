// Function to create falling elements (roses, hearts, sunflowers)
function createFallingElement() {
  const elements = ['🌹', '💗', '🌻'];
  const element = document.createElement('div');
  element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
  element.classList.add('falling-element');
  element.style.left = Math.random() * window.innerWidth + 'px';
  element.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
  document.body.appendChild(element);

  // Remove element after it falls
  setTimeout(() => {
    element.remove();
  }, 5000);
}

// Function to open the main page
function openMainPage() {
  // Hide the landing page
  document.getElementById('landing-page').style.display = 'none';

  // Show the main page
  document.getElementById('main-page').style.display = 'block';

  // Start the falling elements animation
  setInterval(createFallingElement, 300);
}
