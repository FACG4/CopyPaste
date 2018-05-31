const option=Array.prototype.slice.call(document.querySelectorAll('.color-select'))
const inputs=Array.prototype.slice.call(document.querySelectorAll('.color-input'))

let color=''
window.onload=function(){
  inputs.forEach(function(input){
    input.addEventListener('input',function(t){
      if (t.target.id.split('-')[3]==="HEX") {
        colorTarget=t.target.id.split('-')[4]
      }
      coloring(t.target.id,colorType,colorTarget,t.target.value)
    })
  })
}
//
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
     colorType= document.querySelector('#'+(element.options[element.selectedIndex].value)).id.split('-')[3]
     colorTarget= document.querySelector('#'+(element.options[element.selectedIndex].value)).id.split('-')[4]
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
  if (colorTarget==='FormBackground') {
    cssWriter( ".cp-login-form", "background-color", color);

  }else if (colorTarget==='formTitle') {
    cssWriter( ".cp-login-form-title", "color", color);

  }else if (colorTarget==='formBorder') {
    cssWriter('.cp-login-form','border', `1px solid ${color}`)

  }else if (colorTarget==='inputBorder') {
    cssWriter('.cp-input','border-color',color)
  }else if (colorTarget==='labelColor') {
    cssWriter('.cp-label','color',color)
  }else if (colorTarget==='linkColor') {
    cssWriter('.cp-link','color',color)
  }else if (colorTarget==='buttonBackground') {
    cssWriter('.cp-button','background-color',color)
  }else if (colorTarget==='buttonText') {
    cssWriter('.cp-button','color',color)
  }else if (colorTarget==='buttonBorder') {
    cssWriter('.cp-button','border-color',color)
  }
}
