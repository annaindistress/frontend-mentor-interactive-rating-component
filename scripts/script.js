'use strict';

const form = document.querySelector('#rating-form');
const radioButtons = form.querySelectorAll('.form__radio');
const result = document.querySelector('.form-result');
const resultTitle = result.querySelector('.form-result__title');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            const selectedButton = radioButton.id.slice(-1);
            form.classList.add('hidden');
            result.classList.remove('hidden');
            resultTitle.textContent = `You selected ${selectedButton} out of 5`;
        }
    }
})
