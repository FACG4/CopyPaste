const allSections=select('.allSections')
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
    if (rule.selectorText  === '.cp-navbar-container'&&navbarPosition.checked) {
        let prop=styleSheet.cssRules[i].cssText.split(';');
        prop.splice(prop.length-1,0,'position : fixed; top:0;right:0;left:0;')
        prop=prop.join(';')
        cssText=prop
      }
      cssCode+=cssText+'\r'
  }
  cssCodeList.textContent=cssCode

  htmlCodeList.textContent=document.getElementById('cp-navbar-container').innerHTML

})
backToEditing.addEventListener('click',function(e){
resultContainer.style.display='none'
allSections.style.display='block'

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
