document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax-bg");
    const section = document.querySelector(".parallax-section");

    if (parallax && section) {
        const sectionTop = section.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY + window.innerHeight > sectionTop) {
            const offset = (scrollY - sectionTop) * 0.4;
            parallax.style.transform = `translateY(${offset}px)`;
        }
    }
});

// Add scroll effect to header and tech bar
const header = document.querySelector('header');
const logo = document.querySelector('.logo a');
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.querySelectorAll('.hamburger span');

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;

    header.classList.toggle('scrolled', isScrolled);
    logo.classList.toggle('scrolled', isScrolled);
    
    navLinks.forEach(link => link.classList.toggle('scrolled', isScrolled));
    hamburger.forEach(span => span.classList.toggle('scrolled', isScrolled));
});