document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Logged in successfully!');
        document.getElementById('form-container').style.display = 'none';
        
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('welcome-message');
        welcomeMessage.innerHTML = `<h2>Welcome, ${email}!</h2><p>Enjoy your time here.</p>`;
        document.body.appendChild(welcomeMessage);
    } else {
        alert('Incorrect email or password');
    }
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Registered successfully!');
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } else {
        alert('Passwords do not match');
    }
});