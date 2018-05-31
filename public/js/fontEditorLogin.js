// console.log(1234);
const fontStyle =document.querySelector('#fontStyle')
const targetFontStyle =document.querySelector('#targetFontStyle')
const fontWeight =document.querySelector('#fontWeight')
const targetFontWeight =document.querySelector('#targetFontWeight')
const fontFamily =document.querySelector('#fontFamily')
const targetFontFamily =document.querySelector('#targetFontFamily')
const fontSize =document.querySelector('#fontSize')
const targetFontSize =document.querySelector('#targetFontSize')
const fontSizeValue =document.querySelector('#fontSizeValue')

fontStyle.addEventListener('change',fontStyleChanger)
targetFontStyle.addEventListener('change',fontStyleChanger)

function fontStyleChanger (){
  cssWriter(targetFontStyle.value, 'font-style', fontStyle.value)
}


fontWeight.addEventListener('change',fontWeightChanger)
targetFontWeight.addEventListener('change',fontWeightChanger)

function fontWeightChanger (){
  cssWriter(targetFontWeight.value, 'font-weight', fontWeight.value)
}

fontFamily.addEventListener('change',fontFamilyChanger)
targetFontFamily.addEventListener('change',fontFamilyChanger)

function fontFamilyChanger (){
  cssWriter(targetFontFamily.value, 'font-family', fontFamily.value)
}


fontSize.addEventListener('input',fontSizeChanger)

function fontSizeChanger (){
fontSizeValue.textContent=`${fontSize.value} em`
  cssWriter(targetFontSize.value, 'font-size', `${fontSize.value}em`)
}
