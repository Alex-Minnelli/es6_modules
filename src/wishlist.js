import Car from './car.js'

export default class Wishlist {
    list = [];
    nextId = 0;

    add(make, model, year) {
        this.list.push(new Car(++this.nextID, make, model, year));
    }

    remove(carId){
        this.list = this.list.filter((car) => {car.id != carId});
    }
}