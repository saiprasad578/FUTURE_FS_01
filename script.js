const texts = [
  "Sai Prasad Vuggampally",
  "Frontend Developer",
  "Full Stack Developer",
  "JavaScript Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const delayBetweenTexts = 1500;

const typingElement = document.getElementById("typing");

function typingEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, delayBetweenTexts);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(
    typingEffect,
    isDeleting ? deletingSpeed : typingSpeed
  );
}

typingEffect();
