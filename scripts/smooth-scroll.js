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

// Add scroll effect to header and tech bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links a');
    const techBar = document.querySelector('.tech-bar');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        navLinks.forEach(div => div.classList.add('scrolled'));
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        navLinks.forEach(div => div.classList.remove('scrolled'));
    }

    // Hide tech bar when scrolling down significantly
    if (window.scrollY > 200) {
        techBar.classList.add('hidden');
    } else {
        techBar.classList.remove('hidden');
    }
});