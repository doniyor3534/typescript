var car = {
    name: 'bmw',
    color: 'red',
    wheels: 3,
    speed: function () {
        return 100 * this.wheels;
    }
};
var YourCar = {
    name: 'mers',
    color: 'black',
    wheels: 10,
    speed: function () {
        return 200 * this.wheels;
    }
};
var CarFun = function (value) {
    console.log("\n       My car ".concat(value.name, "\n       My car color is ").concat(value.color, "\n       My car wheels ").concat(value.wheels, "\n       My car speed ").concat(value.speed(), "\n   "));
};
CarFun(car);
CarFun(YourCar);
