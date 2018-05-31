const allSections=document.querySelector('.allSectionsLogin')
const generateNavbarCodeButton=document.querySelector('#generateNavbarCodeButton')
const cssCodeList=document.querySelector('#cssCodeList')
const htmlCodeList=document.querySelector('#htmlCodeList')
const resultContainer=document.querySelector('#resultContainer')
generateNavbarCodeButton.addEventListener('click',function(e){

  let cssCode='*{margin:0;padding:0;}'
  resultContainer.style.display='flex'
  allSections.style.display='none'
  while (cssCodeList.firstChild) {
      cssCodeList.removeChild(cssCodeList.firstChild);
  }

  for ( i = 0; i < styleSheet.cssRules.length; i++) {
    let rule = styleSheet.cssRules[i];
    let cssText = styleSheet.cssRules[i].cssText;
      cssCode+=cssText+'\r'
  }
  cssCodeList.textContent=cssCode
  htmlCodeList.textContent=document.getElementById('LoginFormContainer').innerHTML

})
backToEditing.addEventListener('click',function(e){
resultContainer.style.display='none'
allSections.style.display='flex'

})

const copyCssBtn= document.getElementById('copyCssBtn')
copyCssBtn.addEventListener('click',function(e){
  cssCodeList.select();
 document.execCommand('copy');
})
const copyHtmlBtn= document.getElementById('copyHtmlBtn')
copyHtmlBtn.addEventListener('click',function(e){
  htmlCodeList.select();
 document.execCommand('copy');
})
