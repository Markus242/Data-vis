const smile = document.querySelector('path');
const input = document.querySelector('input');


input.addEventListener('click', function () {
    if (input.checked === true) {
        smile.style = 'transform: scale(1, 1); transform-origin: 46% 70%;';
    } else {
        smile.style = 'transform: scale(1, -1); transform-origin: 46% 70%;';
    }

});

input.click()