document.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem('CommonUserData');
    const controlElement = document.getElementById('control');
    const subscriptionContainer = document.getElementById('subscription-container');

    if (userData) {
        controlElement.textContent = 'Купить подписку';
        
        const subscriptionInfo = document.createElement('p');
        subscriptionInfo.textContent = 'Подписка выдается автоматически после оплаты.';
        subscriptionInfo.id = 'createElementText';
        subscriptionContainer.appendChild(subscriptionInfo);

        controlElement.addEventListener('click', () => {
            window.open('https://www.donationalerts.com/r/molodooy0', '_blank');
        });
    } else {
        controlElement.textContent = 'Вы не зарегистрированы';

        const registerButton = document.createElement('p');
        registerButton.textContent = 'Зарегистрироваться';
        registerButton.id = 'NewElementRegisterSubs';
        subscriptionContainer.appendChild(registerButton);

        registerButton.addEventListener('click', () => {
            window.location.href = '/globa-site/registration.html';
        });
    }
});
