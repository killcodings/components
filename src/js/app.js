import '../scss/app.scss';

/* Your JS Code goes here */


let lightning = document.querySelector('.lightning');
let lightningClose = document.querySelector('.lightning__close');
let notification = document.querySelector('.notification');

lightning.addEventListener('click', (evt) => {
    lightningClose.classList.toggle('active');
    notification.classList.toggle('active');
})


let inputs = document.querySelectorAll('.calculate-bonus__inputs-item');

inputs[1].addEventListener('input', function (e) {
    if (inputs[1].value.replace(/\D/g, '') !== '') {
        let int = e.target.value.slice(0, e.target.value.length - 1);
        if (int.length >= 3 && int.length <= 4 && !int.includes('.')) {
            e.target.value = int.slice(0, 3) + '%';
            e.target.setSelectionRange(4, 4);
        } else if (int.length >= 5 & int.length <= 6) {
            let whole = int.slice(0, 2);
            let fraction = int.slice(3, 5);
            e.target.value = whole + fraction + '%';
        } else {
            e.target.value = int + '%';
            e.target.setSelectionRange(e.target.value.length - 1, e.target.value.length - 1);
        }
    }
});

function getInt(val) {
    let v = parseFloat(val);
    if (v % 1 === 0) {
        return v;
    } else {
        let n = v.toString().split('.').join('');
        return parseInt(n);
    }
}

[...inputs].forEach((input, index) => {
    if (index === 0) {
        input.addEventListener('input', () => {
            inputs[2].innerHTML = (input.value * (getInt(inputs[1].value) / 100) * 100 / 100 ).toFixed(0);
        });
    }
})

