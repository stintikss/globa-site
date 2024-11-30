document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('header_ico_theme');
    const body = document.body;

    // Проверяем сохранённую тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('light-theme');
    }

    // Устанавливаем иконку
    if (body.classList.contains('dark-theme')) {
        themeIcon.src = 'icons8-солнце-200 (1).png';
    } else {
        themeIcon.src = 'icons8-солнце-200.png';
    }

    // Переключение темы
    themeIcon.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            themeIcon.src = 'icons8-солнце-200 (1).png';
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
            themeIcon.src = 'icons8-солнце-200.png';
        }
    });
});
