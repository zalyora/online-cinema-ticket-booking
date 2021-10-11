'use strict';
const seatsSchemeSvg = document.querySelector('.seats__scheme__svg');
const totalPrice = document.querySelector('.total__price');
const menuButton = document.querySelector('.m__menu');
const menu = document.querySelector('.nav__menu');

let cost = 100;
let totalCost = 0;

seatsSchemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    let totalSeats = seatsSchemeSvg.querySelectorAll('.active').length;
    totalCost = cost * totalSeats;
    totalPrice.innerHTML = totalCost;
  }

});

menuButton.addEventListener('click', () => {
  menu.classList.toggle('shown');
});