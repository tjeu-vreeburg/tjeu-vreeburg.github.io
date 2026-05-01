document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
    setTimeout(() => document.body.classList.add("show"), 10);

    const links = document.querySelectorAll('a[href]:not([target="_blank"])');

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href.startsWith("#")) return;

        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.remove("show");
            document.body.classList.add("fade-out");

            setTimeout(() => window.location.href = href, 800);
        });
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url && url !== '#') window.open(url, '_blank');
    });
});
