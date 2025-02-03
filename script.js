/* <-------------Navbar--------------> */

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});




let currentIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    if (index < 0) {
        currentIndex = totalTestimonials - 1;
    } else if (index >= totalTestimonials) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextTestimonial() {
    showTestimonial(currentIndex + 1);
}

function prevTestimonial() {
    showTestimonial(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(nextTestimonial, 5000);