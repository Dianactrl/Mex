document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const form = document.getElementById('early-access-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('.submit-btn');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';


            setTimeout(() => {
                btn.textContent = 'Success! We will contact you.';
                btn.style.backgroundColor = '#28a745';
                form.reset();


                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});


    const grid = document.querySelector('.news-grid');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const cards = document.querySelectorAll('.news-card');

    let scrollAmount = 0;

    next.addEventListener('click', () => {
        const cardWidth = document.querySelector('.news-card').offsetWidth + 24;
        const maxScroll = (cards.length - 1) * cardWidth;

        if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
        } else {
            scrollAmount += cardWidth;
        }
        grid.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prev.addEventListener('click', () => {
        const cardWidth = document.querySelector('.news-card').offsetWidth + 24;
        const maxScroll = (cards.length - 1) * cardWidth;

        if (scrollAmount <= 0) {
            scrollAmount = maxScroll;
        } else {
            scrollAmount -= cardWidth;
        }
        grid.style.transform = `translateX(-${scrollAmount}px)`;
    });


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');


    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });


    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');

    alert('Тут будет открываться мобильное меню');
}
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    function toggleMenu() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    }
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('is-active');
        }
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});