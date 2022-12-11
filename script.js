const app = document.getElementById('app');
const swapButton = document.getElementById('swap');
const main = document.getElementsByTagName('main');


const swapTheame = function(e) {
    if (this.className == 'button_day') {
        // console.log("day");
        app.classList.remove('day');
        app.classList.add('night');
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
        main[0].classList.remove('night');
        main[0].classList.add('day');
    } else {
        app.classList.remove('night');
        app.classList.add('day');
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
         main[0].classList.remove('day');
        main[0].classList.add('night');
    }
}

swapButton.addEventListener('click', swapTheame);
