// Select elements
const message = document.getElementById('message');
const question = document.getElementById('question');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const congrats = document.getElementById('congrats');
const congratsHeading = congrats.querySelector('h3');
const congratsText = congrats.querySelector('p');

// Step 1: Display "I Love You"
setTimeout(() => {
  message.style.opacity = 1;
}, 1000);

// Step 2: Fade out "I Love You" and show "Do You Love Me?"
setTimeout(() => {
  message.style.opacity = 0;
  question.textContent = "Do you love me?";
  question.style.opacity = 1;
  
  // Step 3: Show buttons with shock effect
  setTimeout(() => {
    yesButton.style.opacity = 1;
    noButton.style.opacity = 1;
    
    // Add shock effect to buttons after a small delay
    yesButton.classList.add('shock');
    noButton.classList.add('shock');
  }, 1000); // Delay buttons after the question fades in
  
}, 4000);

// Step 4: Handle button clicks and interactions
yesButton.addEventListener('click', () => {
  // Make the congrats div visible and fade it in
  congrats.style.display = 'block'; // Set to block to show it
  
  // Fade in both the <h2> and <p> inside congrats
  setTimeout(() => {
    congrats.style.opacity = 1; // Make the whole congrats div visible
    congratsHeading.style.opacity = 1; // Fade in the h2
    congratsText.style.opacity = 1; // Fade in the p
  }, 100); // Small delay for smooth transition
  
  createEmojis();
});

noButton.addEventListener('mouseover', () => {
  // Randomly move the "No" button when hovered over
  moveButtonRandomly(noButton);
});

// Step 5: Function to generate flying emojis
function createEmojis() {
  const emojiContainer = document.createElement('div');
  emojiContainer.classList.add('emoji-container');
  document.body.appendChild(emojiContainer);

  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement('span');
    emoji.textContent = '❤️';
    emoji.style.position = 'absolute';
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = `${Math.random() * 100}vh`;
    emoji.style.fontSize = `${Math.random() * 50 + 20}px`;
    emoji.style.animation = 'fly 2s ease-in-out forwards';
    emojiContainer.appendChild(emoji);
  }
}

// Step 6: Randomly move the "No" button
function moveButtonRandomly(button) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
