let username = prompt('What is your name?');
username = username !== null && username.length>0 ? username : 'guest';

let myName = document.getElementById('myName');
myName.innerHTML = username;

let div = document.querySelector('div.text-center');
div.classList.remove('hidden');