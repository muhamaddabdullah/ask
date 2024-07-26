document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const message = document.getElementById('message');

    noBtn.addEventListener('mouseover', () => {
        const container = noBtn.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();
        let newTop, newLeft;

        do {
            newTop = Math.random() * (containerRect.height - buttonRect.height);
            newLeft = Math.random() * (containerRect.width - buttonRect.width);
        } while (newTop < 0 || newLeft < 0 || newTop + buttonRect.height > containerRect.height || newLeft + buttonRect.width > containerRect.width);

        noBtn.style.position = 'absolute';
        noBtn.style.top = `${newTop}px`;
        noBtn.style.left = `${newLeft}px`;
    });

    yesBtn.addEventListener('click', () => {
        message.classList.remove('hidden');
        startConfetti();
    });
    document.addEventListener('DOMContentLoaded', () => {
        const noBtn = document.getElementById('no-btn');
        const yesBtn = document.getElementById('yes-btn');
        const message = document.getElementById('message');
        const question = document.getElementById('question');
    
        noBtn.addEventListener('mouseover', () => {
            const container = noBtn.parentElement;
            const containerRect = container.getBoundingClientRect();
            const buttonRect = noBtn.getBoundingClientRect();
            let newTop, newLeft;
    
            do {
                newTop = Math.random() * (containerRect.height - buttonRect.height);
                newLeft = Math.random() * (containerRect.width - buttonRect.width);
            } while (newTop < 0 || newLeft < 0 || newTop + buttonRect.height > containerRect.height || newLeft + buttonRect.width > containerRect.width);
    
            noBtn.style.position = 'absolute';
            noBtn.style.top = `${newTop}px`;
            noBtn.style.left = `${newLeft}px`;
        });
    
        yesBtn.addEventListener('click', () => {
            question.style.display = 'none'; // Hide the question
            message.classList.remove('hidden');
            startConfetti();
        });
    
        function startConfetti() {
            const confettiSettings = {
                target: 'confetti-canvas',
                max: 80, // Reduced number of confetti for performance
                size: 1, // Reduced size for better performance
                animate: true,
                props: ['circle', 'square', 'triangle', 'line'],
                colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
                clock: 25, // Adjusted speed for performance
                rotate: true,
                width: window.innerWidth,
                height: window.innerHeight,
            };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
    
            setTimeout(() => {
                confetti.clear();
            }, 5000);
        }
    });
    
    function startConfetti() {
        const confettiSettings = {
            target: 'confetti-canvas',
            max: 80, // Reduced number of confetti for performance
            size: 1, // Reduced size for better performance
            animate: true,
            props: ['circle', 'square', 'triangle', 'line'],
            colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
            clock: 25, // Adjusted speed for performance
            rotate: true,
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        setTimeout(() => {
            confetti.clear();
        }, 5000);
    }
});
