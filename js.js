document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Здесь можно добавить код для отправки данных на сервер (например, через AJAX)
    // или для отображения сообщения об успешной отправке.
    // Для примера, просто выведем сообщение в консоль:
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    // Очищаем поля формы
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Сообщение отправлено!'); // Простое уведомление
});