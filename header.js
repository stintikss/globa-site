document.addEventListener('DOMContentLoaded', () => {
    // Шаблон шапки с правильными путями
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

        <div class='block_image_header'>
            <img id='header_ico_theme' src="icons8-солнце-200.png" alt="">
        </div>
    `;

    // Вставляем шапку в элемент <header>
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;

        // Запускаем анимацию через небольшой таймаут
        setTimeout(() => {
            headerElement.classList.add('animate');
        }, 100); // Задержка для срабатывания transition
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
