const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const popupFade = document.querySelector("#popup-fade");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("popup_open");
    popupFade.classList.toggle("popup-fade");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    body.classList.toggle("body__blur_active");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("popup_open");
    popupFade.classList.remove("popup-fade");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
    body.classList.remove("body__blur_active");
}