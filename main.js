document.getElementById('form').addEventListener('submit', function(e) {
    var emailinput = document.getElementById('emailinput');
    var emailerror = document.getElementById('emailerror');
    var emailvalue = emailinput.value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailvalue)) {
        emailerror.style.display = 'block';
        emailinput.style.border = '1px solid red';
        emailinput.classList.add('placeholder-black')
        emailinput.placeholder = 'example@email/com';

        e.preventDefault();
    }
});