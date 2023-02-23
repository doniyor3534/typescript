const color = ['red','yellow','green'];
const mynum = [1,3,5,6];
const date =[new Date()];
const cars = [['mers'],['bmw'],[111]]

// 1-) welp with inference extracting value 
const banana = color[1]
const removitem = color.pop()

// 2-)  prevent  incompatible  values 
// color.push('blue')    ok
// color.push(10)        er
// color.push(true)      er

// 3-) Flexible types
const birthday:(Date|string|boolean)[] = [new Date(),"1997-09-25"]
birthday.push(false)

// 4-) Help with defferenet  method as ForEach,map,filter
color.map((item)=>{
    return item.toLocaleUpperCase()
})
