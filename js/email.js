emailjs.init('tU-Nup8m6VLblgHLa');
document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission behavior

// Send the form data using EmailJS
emailjs.sendForm('service_gmail', 'template_qeh89w9', this)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
});
