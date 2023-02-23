interface MyCar{
    name:string,
    color:string,
    wheels:number,
    speed():number
}

const car = {
    name:'bmw',
    color:'red',
    wheels:3,
    speed():number{
        return 100 * this.wheels
    }
}
const YourCar ={
    name:'mers',
    color:'black',
    wheels:10,
    speed():number{
        return 200 * this.wheels
    }
}


const CarFun =(value:MyCar)=>{
   console.log(`
       My car ${value.name}
       My car color is ${value.color}
       My car wheels ${value.wheels}
       My car speed ${value.speed()}
   `)
}
CarFun(car);
CarFun(YourCar);