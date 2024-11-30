document.addEventListener('DOMContentLoaded', () => {
    // Шаблон шапки с правильными путями для GitHub Pages
    const headerHTML = `
        <div class="header_title">
            <a href="/globa-site/index.html" id="home">
                <p>Главная</p>
            </a>
            <a href="/globa-site/about.html" id="about">
                <p class="about">О нас</p>
            </a>
            <a href="/globa-site/contact.html" id="contact">
                <p>Связаться с нами</p>
            </a>
        </div>
    `;

    // Вставляем шапку в элемент <header>
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    // Выделяем активную ссылку
    const links = document.querySelectorAll('.header_title a');
    const currentPath = window.location.pathname; // Получаем текущий путь

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
});
