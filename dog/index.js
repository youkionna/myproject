// Получаем элементы модальных окон и кнопки
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const btn3 = document.getElementById("openModal3");

const closeModal1 = document.getElementById("closeModal1");
const closeModal2 = document.getElementById("closeModal2");
const closeModal3 = document.getElementById("closeModal3");

// Открываем модальные окна
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

// Закрываем модальные окна
closeModal1.onclick = function() {
    modal1.style.display = "none";
}

closeModal2.onclick = function() {
    modal2.style.display = "none";
}

closeModal3.onclick = function() {
    modal3.style.display = "none";
}

// Закрываем модальные окна при клике вне их области
window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
}
