let mainModalWindow = document.querySelector('.mainModalWindow');
let modalWindow = document.querySelector('.modalWindow');
let menu = document.querySelector('#menu');
let modalWindowExit = document.querySelector('.modalWindowExit');

menu.addEventListener('click', () => {
    mainModalWindow.style.visibility = 'visible';
    mainModalWindow.style.opacity = '1';
})

modalWindowExit.addEventListener('click', () => {
    mainModalWindow.style.opacity = '0';
})

window.addEventListener('click', (event) => {
    if (event.target == mainModalWindow) {
        mainModalWindow.style.visibility = "hidden";
        mainModalWindow.style.opacity = '0';
    }
})