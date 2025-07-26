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
        message.textContent = 'Thank you! Your message has been sent.';
        form.reset();
    });
});
