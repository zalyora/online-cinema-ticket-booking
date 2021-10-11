'use strict';
const seatsSchemeSvg = document.querySelector('.seats__scheme__svg');
const totalPrice = document.querySelector('.total__price');
let cost = 100;
let totalCost = 0;

seatsSchemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    console.log(event.target);
    event.target.classList.toggle('active');
    let totalSeats = seatsSchemeSvg.querySelectorAll('.active').length;
    totalCost = cost * totalSeats;
    totalPrice.innerHTML = totalCost;
  }

});