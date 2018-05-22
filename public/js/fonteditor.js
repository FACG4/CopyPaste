const fontStyleSelector = document.getElementById('font-style');
const fontWeightSelector = document.getElementById('font-weight');
const fontFamilySelector = document.getElementById('font-family');
const fontSize = document.getElementById('font-size');
const fontSizeSpan = document.getElementById('font-size-value');

let selectedFontStyle = 'normal';
let selectedFontWeight = 'normal';
let selectedFontFamily = 'Arial';



fontStyleSelector.onchange = (e)=>{
  selectedFontStyle = e.target.value;
  console.log(e.target.value);
}

fontWeightSelector.onchange = (e)=>{
  selectedFontWeight = e.target.value;
  console.log(e.target.value);
}
fontFamilySelector.onchange = (e)=>{
  selectedFontFamily = e.target.value;
  console.log(e.target.value);
}
fontSize.oninput = ()=>{
  console.log(fontSize.value);
  fontSizeSpan.textContent = fontSize.value + 'px'
}
