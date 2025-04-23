let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');

if (slides.length === 0) {
    console.error("Слайды не найдены. Убедитесь, что изображения загружены правильно.");
}

const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = translateX(${-index * 100}%);
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Переход к последнему слайду
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Переход к первому слайду
    }

    showSlide(currentIndex);
}

// Автоматическая прокрутка
let autoScroll = setInterval(() => {
    changeSlide(1);
}, 3000); // Измените на 3000 для переключения каждые 3 секунды

// Остановка прокрутки при наведении
const slider = document.getElementById('slider');
slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
slider.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        changeSlide(1);
    }, 3000);
});

// Показать первый слайд
showSlide(currentIndex);
