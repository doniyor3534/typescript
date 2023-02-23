// 1-modul TYPE 

// Type bu oddiy yo'l bilan qaysidur funcsiya yokida xossalarga murojat,
// qaysiki qiymatga ega bo'lsa

// class Doniyor{};
// const men =new Doniyor()


// 2-modul . INTERFACE , ANNOTATIONS 

// INTERFACE

// interface User{
//     id:number,
//     title:string,
//     completed:boolean
//   }
//  const user ={
//     id:11,
//     title:'ususshhs',
//     completed:true
//   }

// const userobgct = user  as User ;


// ANNOTATIONS 

// let numberelement:number = 3 ;

// numberelement=299          ok
// numberelement='jsjdjdjd'   err

// Array,function,obgect 

const data:string[]=['aaa','shsh','slsls']
const data2:number[]=[1,2,3,45,56,6]

const car:{name:string,color:string} = {
    name:'Mers',
    color:'Black'
}

// class/

class Car{}
const mosin = new Car();

// function 
const logger :(name:string)=> void = (name:string)=>{
    console.log(name);
}

// ANY
// let  cosmos;
// cosmos = 111 ;   bu noqobil 

// Type
// let  cosmos:number;
// cosmos = 111 ;         bu ok


// Typescriptda xechqachon "ANY" malumot turini shundoq qoldirmasligimiz kerak  !!!


// When to use type anatation 
// 1-) Function returns the "ANY" type

const obg = '{"x":101,"y":222}';
const cordinatas:{x:number,y:number} = JSON.parse(obg);


// 2-) when we declare  a variable on one  line end initialize is liter
const numbertest = ['one','twu','three']
let current:boolean;

for (let i = 0; i < numbertest.length; i++) {
    if(numbertest[i] === 'one'){
        current = true
    }
}

// 3-) Variables whoes type can not be inferred
const testnumber = [-1,-2,4,-66];
let testbolen:boolean | number = false ;
for(let i=0;i<testnumber.length;i++){
   if(testnumber[i] > 0){
      testbolen = testnumber[i]
   }
}