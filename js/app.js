const roles = ["UI/UX Designer", "Web Developer", "Front-end Architect"];
const dynamicText = document.getElementById("dynamic-text");
const audioButton = document.getElementById("audio-button");
const audioIcon = document.getElementById("audio-icon");
const nameAudio = document.getElementById("name-audio");

let roleIndex = 0; // Tracks the current role in the array
let charIndex = 0; // Tracks the current character in the role
let isDeleting = false; // Flag to handle deleting effect

function typeEffect() {
  // Get the current role
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    // Remove characters
    dynamicText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false; // Switch to typing
      roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
    }
  } else {
    // Add characters
    dynamicText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true; // Start deleting after typing the full role
    }
  }

  // Adjust typing speed
  const speed = isDeleting ? 100 : 150; // Faster when deleting
  setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();


audioButton.addEventListener("click", () => {
  if (nameAudio.paused) {
    nameAudio.play();
    audioIcon.classList.remove("circle-play");
    audioIcon.classList.add("fa-circle-pause");
  } else {
    nameAudio.pause();
    audioIcon.classList.remove("fa-circle-pause");
    audioIcon.classList.add("circle-play");
  }
});
nameAudio.addEventListener("ended", () => {
  audioIcon.classList.remove("fa-circle-pause");
  audioIcon.classList.add("circle-play");
});
