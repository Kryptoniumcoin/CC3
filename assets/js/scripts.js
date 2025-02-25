// Timer functionality
function startTimer() {
    let time = {
        hours: 2,
        minutes: 0,
        seconds: 0
    };

    function updateTimer() {
        if (time.seconds > 0) {
            time.seconds--;
        } else if (time.minutes > 0) {
            time.minutes--;
            time.seconds = 59;
        } else if (time.hours > 0) {
            time.hours--;
            time.minutes = 59;
            time.seconds = 59;
        }

        document.getElementById('hours').textContent = String(time.hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(time.minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(time.seconds).padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
}

// Sticky header
function initStickyHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow-md', window.scrollY > 50);
    });
}

// FAQ accordion
function initFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            answer.classList.toggle('active');
            icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
        });
    });
}

// Testimonial slider
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-green-600', i === index);
            dot.classList.toggle('bg-gray-300', i !== index);
        });
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    setInterval(() => {
        goToSlide((currentSlide + 1) % slides.length);
    }, 5000);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
    initStickyHeader();
    initFAQ();
    initTestimonialSlider();
});