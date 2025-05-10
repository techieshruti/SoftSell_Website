const phrases = [
  "Trusted by thousands worldwide",
  "Secure and fast payouts",
  "Sell unused licenses easily"
];
let index = 0;
let currentText = "";
let isDeleting = false;

const element = document.getElementById("hero-subheading");

function typeEffect() {
  const fullText = phrases[index];
  currentText = isDeleting
    ? fullText.substring(0, currentText.length - 1)
    : fullText.substring(0, currentText.length + 1);

  element.textContent = currentText;

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && currentText === fullText) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();
