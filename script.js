const texts = ["Я люблю тебя!", "Ты самый лучший!", "Самый крутой для меня человечек!", "Happy Valentine's Day!"];
let currentTextIndex = 0;

document.getElementById('heart').addEventListener('click', function() {
    createConfetti();
    changeText();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    
    for (let i = 0; i < 30; i++) { 
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transition = 'top 2s ease-in';
            confetti.style.top = window.innerHeight + 'px'; 
        }, 10);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {       
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

function changeText() {
    const heartTextElement = document.getElementById('text');
    currentTextIndex = (currentTextIndex + 1) % texts.length; 
    heartTextElement.textContent = texts[currentTextIndex]; 
}
