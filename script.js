// Smooth scrolling for the "View Memories" button
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.button');
    
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = scrollButton.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust scroll position
            behavior: 'smooth'
        });
    });

    // Memory gallery fade-in effect with a bounce
    const memories = document.querySelectorAll('.memory');
    
    window.addEventListener('scroll', function() {
        memories.forEach(memory => {
            const memoryPosition = memory.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (memoryPosition < windowHeight - 100) {
                memory.classList.add('fade-in');
                memory.classList.add('bounce');
            }
        });
    });

    // Confetti animation on birthday message
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseover', function() {
        createConfetti();
    });
});

// Function to create confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#f7b731', '#1dd1a1', '#48dbfb', '#6c5ce7'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
