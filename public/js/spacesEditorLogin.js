const labelInLine =document.querySelector('#labelInLine')
const position =document.querySelector('#position')
const targetPosition =document.querySelector('#targetPosition')
const topMargin =document.querySelector('#topMargin')
const targetTopMargin =document.querySelector('#targetTopMargin')
const topMarginValue =document.querySelector('#topMarginValue')
labelInLine.addEventListener('click',function(){
  if (labelInLine.checked) {
    cssWriter('.cp-input', 'display', 'block')


  }else{
    cssWriter('.cp-input', 'display', 'inline-block')
  }
})

position.addEventListener('change',positionChanger)
targetPosition.addEventListener('change',positionChanger)

function positionChanger (){
  cssWriter(targetPosition.value, 'text-align', position.value)
}

topMargin.addEventListener('change',topMarginChanger)
targetTopMargin.addEventListener('change',topMarginChanger)

function topMarginChanger (){
  if (targetTopMargin.value==='.cp-label') {
    cssWriter('.cp-login-form-title', 'margin-bottom', topMargin.value+'em')

  }
topMarginValue.textContent=`${topMargin.value} em`
  cssWriter(targetTopMargin.value, 'margin-top', topMargin.value+'em')
}
