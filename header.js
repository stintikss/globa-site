document.addEventListener('DOMContentLoaded', () => {
    // Шаблон шапки с добавлением имени пользователя рядом с картинкой
    const headerHTML = `
        <div class="header_title">
            <a href="/globa-site/index.html" id="home">
                <p>ГЛАВНАЯ</p>
            </a>
            <a href="/globa-site/about.html" id="about">
                <p class="about">О НАС</p>
            </a>
            <a href="/globa-site/contact.html" id="contact">
                <p>СВЯЗАТЬСЯ С НАМИ</p>
            </a>
            <a href="/globa-site/settings.html" id="settings">
                <p>НАСТРОЙКИ</p>
            </a>
        </div>

        <div class="block_image_header">
            <span id="user_name_display" class="user-name"></span>
            <img id="header_ico_theme" src="icons8-солнце-200.png" alt="Тема">
        </div>
    `;

    // Вставляем шапку в элемент <header>
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    // Проверяем наличие CommonUserData в localStorage
    const commonUserData = localStorage.getItem('CommonUserData');
    if (commonUserData) {
        const parsedData = JSON.parse(commonUserData);
        const userName = parsedData.name;  // Извлекаем имя из данных


        // Создаем новый пункт меню "Подписка"
        const subscriptionLink = document.createElement('a');
        subscriptionLink.href = '/globa-site/subscription.html'; // Укажите путь к странице подписки
        subscriptionLink.id = 'subscription';
        subscriptionLink.innerHTML = '<p>Подписка</p>';

        // Добавляем новый пункт меню в структуру
        const headerTitle = document.querySelector('.header_title');
        if (headerTitle) {
            headerTitle.appendChild(subscriptionLink);
        }
    }

    // Выделяем активную ссылку
    const links = document.querySelectorAll('.header_title a');
    const currentPath = window.location.pathname.split('/').pop(); // Получаем текущий файл

    links.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
