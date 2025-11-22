document.addEventListener('DOMContentLoaded', () => {
    // Parallax Effect for Mountains
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const mountainBack = document.querySelector('.mountain-back');
        const mountainFront = document.querySelector('.mountain-front');
        const heroContent = document.querySelector('.hero-content');

        if (mountainBack && mountainFront) {
            // Move mountains at different speeds
            mountainBack.style.transform = `translateY(${scrollValue * 0.4}px)`;
            mountainFront.style.transform = `translateY(${scrollValue * 0.1}px)`;
        }

        // Fade out hero content
        if (heroContent) {
            heroContent.style.opacity = 1 - (scrollValue / 400);
            heroContent.style.transform = `translateY(${scrollValue * 0.4 - 30}px)`;
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-text');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
});
