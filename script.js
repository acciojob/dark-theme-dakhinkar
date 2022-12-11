//your code here

const app = document.getElementById('app');
const swapButton = document.getElementById('swap');

const swapTheame = function(e) {
    if (this.className == 'button_day') {
        // console.log("day");
        app.classList.remove('day');
        app.classList.add('night');
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
    } else {
        app.classList.remove('night');
        app.classList.add('day');
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
  
    }
}

swapButton.addEventListener('click', swapTheame);
