// Получаем значение из localStorage
const condition = localStorage.getItem('CommonUserData');
const textElement = document.getElementById('LoginRegister');

// Проверяем, есть ли сохраненное значение
if (condition) {
  textElement.textContent = `Выйти`;

  textElement.addEventListener('click', () => {
    localStorage.removeItem('CommonUserData');
    localStorage.removeItem('nameUserData')
    window.location.reload()
  });
} else {
  textElement.textContent = "Зарегистрироваться";
    textElement.style.color = 'green'
  textElement.addEventListener('click', () => {
    window.location.href = '/globa-site/registration.html';
  });
}
