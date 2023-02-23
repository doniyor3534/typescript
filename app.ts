import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1/';

interface User{
  id:number,
  title:string,
  completed:boolean
}

const logger =(id:number,title:string,completed:boolean)=>{
  console.log(`
      My id ${id}
      My title ${title}
      My status ${completed}
   `);
}

axios.get(url).then((res)=>{
   const user = res.data  as User;
   const id = user.id;
   const title = user.title;
   const completed = user.completed
 
   logger(id,title,completed)
});
  