
//*******************************************************
// ****************** start Of Coloring *****************
//*******************************************************




const option=Array.prototype.slice.call(document.querySelectorAll('.color-select'))
const inputs=Array.prototype.slice.call(document.querySelectorAll('.color-input'))


const option2=Array.prototype.slice.call(document.querySelectorAll('.nav-color-select'))
const inputs2=Array.prototype.slice.call(document.querySelectorAll('.nav-hovor-input'))

let color=''
window.onload=()=>{
  inputs.forEach(input=>{
    // console.log(input.id);
    input.addEventListener('input',t=>{
      if (t.target.id.split('nav-color-input-')[1].split('-')[0]==="HEX") {
        colorTarget=t.target.id.split('nav-color-input-')[1].split('-')[1]
      }
      coloring(t.target.id,colorType,colorTarget,t.target.value)
    })
  })
}
// console.log(inputs);

const hidder=(arr,index)=>{
  Array.prototype.slice.call(arr.options).slice(index).forEach(opt=>{
    document.querySelector('#'+(opt.value)).style.display='none';
  })
}
let colorType='HEX'
let colorTarget=''
option.forEach(element=>{
  hidder(element,1)
  element.addEventListener('input',e=>{
    hidder(element,0)
    document.querySelector('#'+(element.options[element.selectedIndex].value)).style.display='inline-block';
     colorType= document.querySelector('#'+(element.options[element.selectedIndex].value)).id.split('color-input-')[1].split('-')[0]
     colorTarget= document.querySelector('#'+(element.options[element.selectedIndex].value)).id.split('nav-color-input-')[1].split('-')[1]
  },false)
})

const coloring=(id,colorType,colorTarget,value)=>{
  console.log(colorTarget);
  if (colorType==='HEX') {
    if (value.length==6&&value.match(/[0-9a-fA-F]/g).length==6) {
      color='#'+value
      document.getElementById(id).classList.remove('redBorder')
      console.log(color);
    }else{
      document.getElementById(id).classList.add('redBorder')
    }
  }else if (colorType==='RGB') {

    document.getElementById(id).classList.add('redBorder')
    const  cleanArray=[]
    let isRGBArrayTrue =value.split(',').every((item)=>{
      cleanArray.push(item.trim())
      return Number.isInteger(Number(item.trim()))&&item.trim()<=255&&item.trim()>=0&&item.trim()!=''
    })
    if (isRGBArrayTrue&&value.split(',').length==3) {
      document.getElementById(id).classList.remove('redBorder')
      color='rgb('+cleanArray.join(',')+')'
    }

  }
  else if(colorType=='inputColor') {
    color=value
  }
  if (colorTarget=='navbackground') {

    cssWriter( "preview", "background-color", color);

  }else if (colorTarget=='link') {
    cssWriter( "li a", "color", color);



  }else if (colorTarget='hover') {
    cssWriter('li:hover','background-color',color)

  }
}
//*******************************************************
// ******************** End Of Coloring *****************
//*******************************************************
