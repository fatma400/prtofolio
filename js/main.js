// script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إرسال النموذج بشكل تقليدي
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // إرسال البيانات إلى EmailJS باستخدام الخدمة
    emailjs.send('service_i8n2rp8', 'template_8hvk1ti', {
        name: name,
        email: email,
        message: message
    })
});
