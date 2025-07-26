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

        const startPlayback = () => {
            audio.muted = true;
            audio.play().then(() => {
                audio.muted = false;
                toggleBtn.textContent = '⏸';
                toggleBtn.setAttribute('aria-label', 'Pause music');
            }).catch(err => {
                console.log('Autoplay failed:', err);
            });
        };

        // attempt to autoplay and try again on first user interaction if blocked
        startPlayback();
        document.addEventListener('click', () => {
            if (audio.paused) startPlayback();
        }, { once: true });

        toggleBtn.addEventListener('click', () => {
            if (audio.paused) {
                startPlayback();
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

    // Split DJ name into letters and apply floating animation
    const djName = document.getElementById('djName');
    if (djName) {
        const text = djName.textContent.trim();
        djName.textContent = '';
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'float-letter';
            span.textContent = char;
            span.style.animationDelay = `${i * 0.2}s`;
            djName.appendChild(span);
        });
    }

    // DJ name float animation is handled purely in CSS
});
