document.getElementById('registrationbutton').addEventListener('click', () => {
    const mailInputValue = document.getElementById('mailInput').value;
    const NameInputValue = document.getElementById('NameInput').value;
    const PasswordInputValue = document.getElementById('PasswordInput').value;
    const PhoneInputValue = document.getElementById('PhoneInput').value;

    const CommonInputValue = [mailInputValue, NameInputValue, PasswordInputValue, PhoneInputValue];

    // Проверяем, есть ли пустые поля
    if (CommonInputValue.some(value => value.trim() === '')) { // trim удаляет пробелы
        alert('Заполните все поля');
        return; // Останавливаем выполнение
    }

    if (mailInputValue.includes('@gmail.com') || mailInputValue.includes('@mail.ru')) {
        if (NameInputValue.length >= 2) {
            if (PasswordInputValue.length >= 6) {
                if (PhoneInputValue.startsWith('7') && PhoneInputValue.length === 11) {

                    const nameUserData = NameInputValue; // Assuming NameInputValue contains the user's name
                    localStorage.setItem('nameUserData', nameUserData);
                    const CommonUserData = {
                        email: mailInputValue,
                        name: NameInputValue,
                        password: PasswordInputValue,
                        phone: PhoneInputValue,
                    };

                    localStorage.setItem('CommonUserData', JSON.stringify(CommonUserData));
                    window.location.href = '/globa-site/settings.html'; // Перенаправление
                } else {
                    alert('Номер телефона должен начинаться с 7 и быть длиной 11 символов');
                }
            } else {
                alert('Пароль должен быть длиной минимум 6 символов');
            }
        } else {
            alert('Имя должно содержать минимум 2 символа');
        }
    } else {
        alert('Email должен быть с доменом @gmail.com или @mail.ru');
    }
});
