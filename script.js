document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple form submit handler
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        message.textContent = 'Děkujeme! Vaše zpráva byla odeslána.';
        form.reset();
    });

    // Dark mode toggle
    const toggleTheme = document.getElementById('toggleTheme');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || !storedTheme) {
        document.body.classList.add('dark-mode');
    }
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Custom audio player
    const audio = document.getElementById('bgAudio');
    const toggleBtn = document.getElementById('audioToggle');
    const volumeControl = document.getElementById('volumeControl');
    if (audio && toggleBtn && volumeControl) {
        volumeControl.value = audio.volume;
        toggleBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                toggleBtn.textContent = '⏸';
                toggleBtn.setAttribute('aria-label', 'Pause music');
            } else {
                audio.pause();
                toggleBtn.textContent = '▶';
                toggleBtn.setAttribute('aria-label', 'Play music');
            }
        });
        volumeControl.addEventListener('input', () => {
            audio.volume = volumeControl.value;
        });
    }

    // Wave effect on hero background
    const hero = document.getElementById('hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const wave = document.createElement('span');
            wave.className = 'wave';
            wave.style.left = `${e.clientX}px`;
            wave.style.top = `${e.clientY}px`;
            hero.appendChild(wave);
            wave.addEventListener('animationend', () => wave.remove());
        });
    }
});
