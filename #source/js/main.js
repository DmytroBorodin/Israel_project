'use strict'

let secondInnerBlock = document.querySelector('.second-inner-block');
let subMenu = document.querySelector('.sub-menu');
let cardIconBlockArray = [...document.querySelectorAll('.card-icon-block')];
let invisibleCardsArray = [...document.querySelectorAll('.invisible-card')];
let mainShownBtn = document.querySelector('#main-shown-btn');
let mainWrap = document.querySelector('#main-wrap');
console.log(cardIconBlockArray);

cardIconBlockArray.forEach(icon => {
	icon.addEventListener('click', () => {
		let likeIcon = icon.querySelector('.icon-heart_border');
		likeIcon.classList.toggle('like-active');
	})
});

secondInnerBlock.addEventListener('click', () => {
	subMenu.classList.toggle('opacity-1')
});

mainShownBtn.addEventListener('click', () => {
	invisibleCardsArray.forEach(invCard => {
		invCard.classList.toggle('invisible-card');
	})
	mainWrap.classList.toggle('main-wrap');
})
