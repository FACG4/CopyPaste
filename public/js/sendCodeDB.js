const htmlMsg=document.getElementById('htmlMsg');
const cssMsg=document.getElementById('cssMsg');
const saveHtml = document.getElementById('saveHtml')
saveHtml.addEventListener('click',(event)=>{
  event.preventDefault();
  const body = document.getElementById('htmlCodeList');
  const data = {htmlCodeList:body.value}
  fetchData('/insertHtmlCode',htmlMsg,'Your HTML Code Is Saved Successfully!',data)
})

saveCssBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  const body = document.getElementById('cssCodeList');
  const data = {cssCodeList:body.value}
  fetchData('/insertCssCode',cssMsg,'Your CSS Code Is Saved Successfully!',data)
})


function fetchData(url,element,msg,data){
 fetch(url, {
     method: 'POST',
     headers:{
       'content-type':'application/json'
     },
     credentials:'same-origin',
     body:JSON.stringify(data)
 }).then((res) => element.textContent=msg)
}
