const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingField = document.getElementById('shipping');

const total = document.getElementById('total');

free.addEventListener('click', function(){
   shippingField.innerText = '5';
});
express.addEventListener('click', function(){});
shippingField.innerText = '30';

div1.addEventListener('click', function () {
    //Changing image
    img.src = 'images/1.jpg';
    //Changing description
    desc.innerText = 'First Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non'
    //Changing price
    price.innerText = '650$';
   

});
div2.addEventListener('click', function () {
    img.src = 'images/2.jpg';
    desc.innerText = 'Second Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non'
    price.innerText = '700$';
});
div3.addEventListener('click', function () {
    img.src = 'images/3.jpg';
    desc.innerText = 'Third Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non'
    price.innerText = '600$';
});