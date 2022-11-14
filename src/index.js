import Wishlist from './wishlist.js'

const submitForm = document.querySelector('#submitForm');

const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const yearInput = document.querySelector('#yearInput');

const pCarMake = document.querySelector('#car-make');
const pCarModel = document.querySelector('#car-model');
const pCarYear = document.querySelector('#car-year');

const removeButton = document.querySelector('.removeBtn');
const unorderedList = document.querySelector('ul');

submitForm.addEventListener('submit', addCar);
removeButton.addEventListener('click', removeCar);

const wishlist = new Wishlist();

function showCarDetails(car){
    pCarMake.textContent = car.make;
    pCarModel.textContent = car.model;
    pCarYear.textContent = car.year;
    removeButton.disabled = false;
    removeButton.setAttribute("data-carId", car.id);
}

function updateDOMList(){
    unorderedList.innerHTML = '';
    wishlist.list.forEach(car => {
        let li = document.createElement('li');
        li.textContent =`${car.make} ${car.model}`;
        li.addEventListener('click', ()=> {showCarDetails(car)});
        unorderedList.append(li);
    })
}

function addCar(event){
    event.preventDefault();
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}

function removeCar(){
    let carId = Number(removeButton.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    pCarMake.textContent = '';
    pCarModel.textContent = '';
    pCarYear.textContent = '';
    removeButton.disabled = true;
}