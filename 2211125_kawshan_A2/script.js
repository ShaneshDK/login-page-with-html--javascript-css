// get elements
const form = document.querySelector('form');
const signinBtn = document.querySelector('#signin-btn');
const signupBtn = document.querySelector('#signup-btn');

// check if user exists in local storage
const checkUser = (username, password) => {
	const users = JSON.parse(localStorage.getItem('users'));
	if (users) {
		for (const user of users) {
			if (user.username === username && user.password === password) {
				return true;
			}
		}
	}
	return false;
};

// sign in
signinBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

if (checkUser(username, password)) 
	{window.location.href = 'home.html';} 
else {
alert('Invalid username or password');
}
});

// sign up
signupBtn.addEventListener('click', () => {
const username = prompt('Enter a username');
const password = prompt('Enter a password');

if (username && password) 
{let users = JSON.parse(localStorage.getItem('users')) || [];
users.push({ username, password });
localStorage.setItem('users', JSON.stringify(users));
alert('User created successfully');
}
});


// home page
if (window.location.href.includes('home.html')) {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User created successfully');
    });
    }


