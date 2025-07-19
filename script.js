
window.onload = () => {
    const audio = document.getElementById('startup-sound');
    audio.volume = 0.2;  // son discret
    setTimeout(() => {
        document.querySelector('.loading').textContent = "Bonjour 👋 Je suis Vaty, votre copilote SEMYDA.";
    }, 1500);
};
