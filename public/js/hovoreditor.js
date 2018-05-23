console.log(document.getElementById('textDecorationCheck'));
const checkBox=document.getElementById('textDecorationCheck');
checkBox.addEventListener('change',e=>{
  if (checkBox.checked){
    cssWriter('li a:hover','text-decoration','underline')
  } else {
    cssWriter('li a:hover','text-decoration','none')
}
})
