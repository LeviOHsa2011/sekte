// Smooth Reveal beim Scrollen
const revealElements = document.querySelectorAll('.glass, h1, p');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)";
    observer.observe(el);
});

// Parallax Effekt für den Background
window.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.deep-bg');
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
});


