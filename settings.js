document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
  
    // Установить язык из localStorage или по умолчанию
    const savedLang = localStorage.getItem('language') || 'ru';
    languageSwitcher.value = savedLang;
  
    // Обработчик изменения языка
    languageSwitcher.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem('language', selectedLang);
  
      // Отправляем событие, чтобы обновить текст в других частях сайта
      document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: selectedLang } }));
    });
  });
  