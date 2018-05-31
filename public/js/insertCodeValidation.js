const cssCodeList = document.getElementById('cssCodeList');
const htmlCodeList = document.getElementById('htmlCodeList');

const saveHtmlBtn = document.getElementsByName('saveHtmlBtn')[0];
const saveCssBtn = document.getElementsByName('saveCssBtn')[0];

htmlCodeList.addEventListener('input', () => {
  if (htmlCodeList.value == '') {
    saveHtmlBtn.style.display = 'none';
  } else {
    saveHtmlBtn.style.display = 'block';
  }
})

cssCodeList.addEventListener('input', () => {
  if (cssCodeList.value == '') {
    saveCssBtn.style.display = 'none';
  } else {
    saveCssBtn.style.display = 'block';
  }
})
