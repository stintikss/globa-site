document.addEventListener('DOMContentLoaded', () => {
    const translations = {
      ru: {
        home: "Главная",
        about: "О нас",
        contact: "Связаться с нами",
        settings: "Настройки",
        subscription: "Подписка",
        themeAlt: "Тема",
      },
      en: {
        home: "Home",
        about: "About Us",
        contact: "Contact Us",
        settings: "Settings",
        subscription: "Subscription",
        themeAlt: "Theme",
      },
    };
  
    function updateHeaderLanguage(lang) {
      const headerHTML = `
        <div class="header_title">
            <a href="/globa-site/index.html" id="home">
                <p>${translations[lang].home}</p>
            </a>
            <a href="/globa-site/about.html" id="about">
                <p>${translations[lang].about}</p>
            </a>
            <a href="/globa-site/contact.html" id="contact">
                <p>${translations[lang].contact}</p>
            </a>
            <a href="/globa-site/settings.html" id="settings">
                <p>${translations[lang].settings}</p>
            </a>
        </div>
        <div class="block_image_header">
            <span id="user_name_display" class="user-name"></span>
            <img id="header_ico_theme" src="icons8-солнце-200.png" alt="${translations[lang].themeAlt}">
        </div>
      `;
  
      const headerElement = document.querySelector('header');
      if (headerElement) {
        headerElement.innerHTML = headerHTML;
  
        // Добавить пункт меню "Подписка", если пользователь вошел
        const commonUserData = localStorage.getItem('CommonUserData');
        if (commonUserData) {
          const subscriptionLink = document.createElement('a');
          subscriptionLink.href = '/globa-site/subscription.html'; // Укажите путь к странице подписки
          subscriptionLink.id = 'subscription';
          subscriptionLink.innerHTML = `<p>${translations[lang].subscription}</p>`;
  
          const headerTitle = document.querySelector('.header_title');
          if (headerTitle) {
            headerTitle.appendChild(subscriptionLink);
          }
        }
  
        // Выделяем активную ссылку
        const links = document.querySelectorAll('.header_title a');
        const currentPath = window.location.pathname.split('/').pop();
  
        links.forEach(link => {
          const linkPath = link.getAttribute('href').split('/').pop();
          if (linkPath === currentPath) {
            link.classList.add('active');
          }
        });
      }
    }
  
    // Получаем текущий язык из localStorage
    const savedLang = localStorage.getItem('language') || 'ru';
    updateHeaderLanguage(savedLang);
  
    // Обновляем язык при изменении
    document.addEventListener('languageChange', (e) => {
      const newLang = e.detail.language;
      updateHeaderLanguage(newLang);
    });
  });
  