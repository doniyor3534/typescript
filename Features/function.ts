// return shartmas joylardaa
const calc =(a:number,b:number)=>{
    a + b
}

// return shart bolgan joylada             //anatationlashda logikasiga qaramaydi faqat type ga qraydi
const calcB =(a:number,b:number):number=>{
   return a + b
}


// Void and  never type

const voidfun =(msg:string)=>{
    console.log(msg);
    return null
}                               // ! hech narsa qaytmasligini bildirish uchun

const voidfun2 =(msg:string) :void =>{
    console.log(msg);
}                                //ok hech narsa qaytmasligini bildirish uchun void quying



// obegect
const carobg = {
    name:'mers',
    isairbag:true
}

const loggerfun=({name,isairbag}:{name:string,isairbag:boolean}):void =>{
   console.log(` my car ${name} has airbag ${isairbag}`);
}
loggerfun(carobg)