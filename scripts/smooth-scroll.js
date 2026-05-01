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

// Scroll effect for header — change colours when scrolled
const header = document.querySelector('header');
const logoLink = document.querySelector('.logo a');
const navLinkEls = document.querySelectorAll('.nav-links a');
const hamburgerSpans = document.querySelectorAll('.hamburger span');

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;

    if (header) header.classList.toggle('scrolled', isScrolled);
    if (logoLink) logoLink.classList.toggle('scrolled', isScrolled);

    navLinkEls.forEach(link => link.classList.toggle('scrolled', isScrolled));
    hamburgerSpans.forEach(span => span.classList.toggle('scrolled', isScrolled));
});
