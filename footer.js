document.addEventListener('DOMContentLoaded', () => {
    const translations = {
      ru: {
        quickLinks: "Быстрые ссылки",
        home: "Главная",
        about: "О нас",
        contact: "Связаться",
        settings: "Настройки",
        reviews: "Отзывы",
        subscribe: "Подпишитесь",
        subscribeMessage: "Оставайтесь на связи с последними новостями и обновлениями.",
        copyright: "&copy; 2024 Globa-Site. Все права защищены.",
      },
      en: {
        quickLinks: "Quick Links",
        home: "Home",
        about: "About Us",
        contact: "Contact",
        settings: "Settings",
        reviews: "Reviews",
        subscribe: "Subscribe",
        subscribeMessage: "Stay connected with the latest news and updates.",
        copyright: "&copy; 2024 Globa-Site. All rights reserved.",
      },
    };
  
    // Функция для обновления текста в футере
    function updateFooterLanguage(lang) {
      const footerHTML = `
        <div class="footer-container">
          <div class="footer-section">
            <h3>${translations[lang].quickLinks}</h3>
            <div class='button-link'>
              <ul>
                  <li><a href="/globa-site/index.html">${translations[lang].home}</a></li>
                  <li><a href="/globa-site/about.html">${translations[lang].about}</a></li>
                  <li><a href="/globa-site/contact.html">${translations[lang].contact}</a></li>
                  <li><a href="/globa-site/settings.html">${translations[lang].settings}</a></li>
                  <li><a href="/globa-site/all-reviews.html">${translations[lang].reviews}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-section footer_block_med">
            <h3>${translations[lang].subscribe}</h3>
            <form class="footer-form">
              <input type="email" placeholder="${lang === 'ru' ? 'Ваш email' : 'Your email'}" required />
              <button type="submit" id='subs_bott_foot'>${translations[lang].subscribe}</button>
            </form>
            <p>${translations[lang].subscribeMessage}</p>
          </div>
        <div class="footer-bottom">
          <p>${translations[lang].copyright}</p>
        </div>
      `;
  
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        footerElement.innerHTML = footerHTML;
      }
    }
  
    // Получить язык из localStorage или использовать русский по умолчанию
    const savedLang = localStorage.getItem('language') || 'ru';
  
    // Обновить язык футера
    updateFooterLanguage(savedLang);
  
    // Следить за изменением языка
    document.addEventListener('languageChange', (e) => {
      const newLang = e.detail.language;
      updateFooterLanguage(newLang);
    });
  });
  