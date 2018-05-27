const option=Array.prototype.slice.call(document.querySelectorAll('.color-select'))
const inputs=Array.prototype.slice.call(document.querySelectorAll('.color-input'))


const option2=Array.prototype.slice.call(document.querySelectorAll('.nav-color-select'))
const inputs2=Array.prototype.slice.call(document.querySelectorAll('.nav-hovor-input'))

let color=''
window.onload=function(){
  inputs.forEach(function(input){
    input.addEventListener('input',function(t){
      if (t.target.id.split('nav-color-input-')[1].split('-')[0]==="HEX") {
        colorTarget=t.target.id.split('nav-color-input-')[1].split('-')[1]
      }
      coloring(t.target.id,colorType,colorTarget,t.target.value)
    })
  })
}

const hidder=function(arr,index){
  Array.prototype.slice.call(arr.options).slice(index).forEach(function(opt){
    document.querySelector('#'+(opt.value)).style.display='none';
  })
}
let colorType='HEX'
let colorTarget=''
option.forEach(function(element){
  hidder(element,1)
  element.addEventListener('input',function(e){
    hidder(element,0)
    document.querySelector('#'+(element.options[element.selectedIndex].value)).style.display='inline-block';
     colorType= document.querySelector('#'+(element.options[element.selectedIndex].value)).id.split('color-input-')[1].split('-')[0]
     colorTarget= document.querySelector('#'+(element.options[element.selectedIndex].value)).id.split('nav-color-input-')[1].split('-')[1]
  },false)
})

const coloring=function(id,colorType,colorTarget,value){
  if (colorType==='HEX') {
    if (value.length==6&&value.match(/[0-9a-fA-F]/g).length==6) {
      color='#'+value
      document.getElementById(id).classList.remove('redBorder')
    }else{
      document.getElementById(id).classList.add('redBorder')
    }
  }else if (colorType==='RGB') {

    document.getElementById(id).classList.add('redBorder')
    const  cleanArray=[]
    let isRGBArrayTrue =value.split(',').every(function(item){
      cleanArray.push(item.trim())
      return Number.isInteger(Number(item.trim()))&&item.trim()<=255&&item.trim()>=0&&item.trim()!=''
    })
    if (isRGBArrayTrue&&value.split(',').length==3) {
      document.getElementById(id).classList.remove('redBorder')
      color='rgb('+cleanArray.join(',')+')'
    }

  }
  else if(colorType==='inputColor') {
    color=value
  }
  if (colorTarget==='navbackground') {
    cssWriter( ".cp-navbar-container", "background-color", color);

  }else if (colorTarget==='link') {
    cssWriter( ".cp-navbar-container > li a", "color", color);

  }else if (colorTarget==='hover') {
    cssWriter('.cp-navbar-container > .cp-list:hover','background-color',color)

  }else if (colorTarget==='active') {
    cssWriter('.cp-navbar-container > li a.active','color',color)

  }
}
