const chatBtn = document.getElementById("chat-button");
const chatContainer = document.getElementById("chat-container");
const chatIframe = document.getElementById("chat-iframe");
const loader = document.getElementById("chat-loader");
const sound = document.getElementById("chat-sound");

let isOpen = false;

chatBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    chatContainer.style.display = "flex";
    loader.style.display = "flex";
    chatIframe.style.display = "none";
    sound.play().catch(() => {});
    setTimeout(() => {
      loader.style.display = "none";
      chatIframe.style.display = "block";
    }, 1500);
  } else {
    chatContainer.style.display = "none";
  }
});
