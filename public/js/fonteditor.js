const fontStyleSelector = document.getElementById('font-style');
const fontWeightSelector = document.getElementById('font-weight');
const fontFamilySelector = document.getElementById('font-family');
const fontSize = document.getElementById('font-size');
const fontSizeSpan = document.getElementById('font-size-value');


fontStyleSelector.onchange = function(e) {
  cssWriter('.cp-navbar-container > li a', 'font-style', e.currentTarget.value)
};

fontWeightSelector.onchange = function(e) {
  cssWriter('.cp-navbar-container > li a', 'font-weight', e.currentTarget.value)
};

fontFamilySelector.onchange = function(e) {
  cssWriter('.cp-navbar-container > li a', 'font-family', e.currentTarget.value);
};


fontSize.oninput = function(e) {
  fontSizeSpan.textContent = e.currentTarget.value + ' em';
  cssWriter('.cp-navbar-container > li a', 'font-size', e.currentTarget.value + 'em')
};
