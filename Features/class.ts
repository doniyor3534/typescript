class Car {
    start():void {
        console.log("I'm driveng")
    }
    stoping():void{
        console.log("I've stopped")
    }
}

const MyCar = new Car();
MyCar.start()
MyCar.stoping()

///////////////////////////
class Buss extends Car{          //Car + ....
    remov():void{
        console.log("I've removeeeee")
    }
};

const MyBuss = new Buss()
MyBuss.start()
MyBuss.stoping()
MyBuss.remov()