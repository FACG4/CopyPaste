const htmlMsg=document.getElementById('htmlMsg');
const cssMsg=document.getElementById('cssMsg');
saveCssBtn.addEventListener('click',postCSSData)
 function postCSSData(event){
      event.preventDefault();
      const body = document.getElementById('cssCodeList');

      fetch('/insertCssCode', {
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          credentials:'same-origin',
          body:JSON.stringify({cssCodeList:body.value})
      }).then((res) => cssMsg.textContent='Your CSS Code Is Saved Successfully!')
    }

const saveHtml = document.getElementById('saveHtml')
saveHtml.addEventListener('click',postData)
 function postData(event){
      event.preventDefault();
      const body = document.getElementById('htmlCodeList');

      fetch('/insertHtmlCode', {
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          credentials:'same-origin',
          body:JSON.stringify({htmlCodeList:body.value})
      }).then((res) => htmlMsg.textContent='Your HTML Code Is Saved Successfully!')
    }
