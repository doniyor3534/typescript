var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("I'm driveng");
    };
    Car.prototype.stoping = function () {
        console.log("I've stopped");
    };
    return Car;
}());
var MyCar = new Car();
MyCar.start();
MyCar.stoping();
///////////////////////////
var Buss = /** @class */ (function (_super) {
    __extends(Buss, _super);
    function Buss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Buss.prototype.remov = function () {
        console.log("I've removeeeee");
    };
    return Buss;
}(Car));
;
var MyBuss = new Buss();
MyBuss.start();
MyBuss.stoping();
MyBuss.remov();
