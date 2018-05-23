const fontStyleSelector = document.getElementById('font-style');
const fontWeightSelector = document.getElementById('font-weight');
const fontFamilySelector = document.getElementById('font-family');
const fontSize = document.getElementById('font-size');
const fontSizeSpan = document.getElementById('font-size-value');

const changeProperty = (propertyName, value) => {
  [].forEach.call(navbarPreview.getElementsByTagName('li'), (element) => {
    element.getElementsByTagName('a')[0].style[propertyName] = propertyName === 'fontSize' ? `${value}px` : value;
  });
};

let selectedFontStyle = 'normal';
let selectedFontWeight = 'normal';
let selectedFontFamily = 'Arial';


fontStyleSelector.onchange = (e) => {
  selectedFontStyle = e.target.value;
  changeProperty('fontStyle', selectedFontStyle);
};

fontWeightSelector.onchange = (e) => {
  selectedFontWeight = e.target.value;
  changeProperty('fontWeight', selectedFontWeight);
};
fontFamilySelector.onchange = (e) => {
  selectedFontFamily = e.target.value;
  changeProperty('fontFamily', selectedFontFamily);
};

fontSize.oninput = () => {
  fontSizeSpan.textContent = `${fontSize.value}px`;
  changeProperty('fontSize', fontSize.value);
};
