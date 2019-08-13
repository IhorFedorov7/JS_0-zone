'use strict';
//Кастомный чекбокс 
const checkBox = document.querySelectorAll('.filter-check_checkbox');

//Через цикл ForEach
checkBox.forEach((element) => {
    element.addEventListener('change', function() {
        if (this.checked === true) { //окращенно if (this.checked)
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

//Через цикл For

/*for( let i = 0; i < checkBox.length; i++){
    checkBox[i].addEventListener('change', function() {
        if (this.checked === true) { //окращенно if (this.checked)
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
}*/
//End чекбокс

//Корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});
//End корзина

//Добавление удаление с корзины (работа с корзина)
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {  
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}
//End работа с корзина