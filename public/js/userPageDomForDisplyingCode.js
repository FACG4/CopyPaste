let flag = true;
const a = document.getElementById('a');
a.addEventListener('click', ()=>{

 if(flag){
   a.style.overflow = 'visible';
   flag=false;
 }

 else{
   a.style.overflow = 'hidden';
   flag=true;
 }
})
let flag1 = true;
const b = document.getElementById('b');
b.addEventListener('click', ()=>{

 if(flag1){
   b.style.overflow = 'visible';
   flag1=false;
 }

 else{
   b.style.overflow = 'hidden';
   flag1=true;
 }
})
