document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  });
});
