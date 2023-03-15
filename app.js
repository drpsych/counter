// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            console.log('decrease');
            count--;
        }
        else if (styles.contains("increase")) {
            console.log('increase');
            count++;
        }
        else {
            console.log('reset');
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#000";
        }
        value.textContent = count;
    });
});
