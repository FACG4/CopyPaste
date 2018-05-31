const create = function(element) {
  return document.createElement(element);
}
let inputsIdCounter=2
let linksIdCounter=1

const cpLoginForm=document.querySelector('#cp-login-form')
const loginFormActionInput=document.querySelector('#loginFormActionInput')
const cpLoginFormTitle=document.querySelector('#cp-login-form-title')
const loginFormTiltleInput=document.querySelector('#loginFormTiltleInput')
const cpLoginSubmit=document.querySelector('#cp-login-submit')
const addNewInput=document.querySelector('#addNewInput')
const inputTitleInput=document.querySelector('#inputTitleInput')
const inputTypeSelect=document.querySelector('#inputTypeSelect')
const inputNameInput=document.querySelector('#inputNameInput')
const inputPlaceholderInput=document.querySelector('#inputPlaceholderInput')
const cpLoginInputsDiv=document.querySelector('#cp-login-inputs-div')
const addInputDiv=document.querySelector('#addInputDiv')
const addInputButton=document.querySelector('#addInputButton')
const addNewLink=document.querySelector('#addNewLink')
const addLinkDiv=document.querySelector('#addLinkDiv')
const addLinkButton=document.querySelector('#addLinkButton')
const linkTitleInput=document.querySelector('#linkTitleInput')
const linkHrefInput=document.querySelector('#linkHrefInput')
const editInput=document.querySelector('#editInput')
const editInputSelect=document.querySelector('#editInputSelect')
const editInputDiv=document.querySelector('#editInputDiv')
const editInputTitleInput=document.querySelector('#editInputTitleInput')
const EditInputTypeSelect=document.querySelector('#EditInputTypeSelect')
const editInputNameInput=document.querySelector('#editInputNameInput')
const editInputPlaceholderInput=document.querySelector('#editInputPlaceholderInput')
const editInputButton=document.querySelector('#editInputButton')
const editLinkBtn=document.querySelector('#editLinkBtn')
const editLinkDiv=document.querySelector('#editLinkDiv')
const editLinkSelect=document.querySelector('#editLinkSelect')
const editLinkTitleInput=document.querySelector('#editLinkTitleInput')
const editLinkHrefInput=document.querySelector('#editLinkHrefInput')

function  displayInputs(){
  if (addInputDiv.style.display==='none') {
    addInputDiv.style.display='block'
    editInputDiv.style.display='none'
    restValues(addInputDiv)
  }else {
    addInputDiv.style.display='none'
  }

}

function restValues(parent){

parent.childNodes.forEach(function(item){
  if (item.tagName==='INPUT'&&item.type!=='button') {
    item.value=''
  }
});
}
addNewInput.addEventListener('click',displayInputs)
addInputButton.addEventListener('click',function(e){
  const inputTitleInputValue=inputTitleInput.value.trim()
  const inputTypeSelectValue=inputTypeSelect.value
  const inputNameInputValue=inputNameInput.value.trim()
  const inputPlaceholderInputValue=inputPlaceholderInput.value.trim()
  if(inputTitleInputValue.length>0){
  const newInput=create('input')
  const newDiv=create('div')
  newInput.setAttribute('type',inputTypeSelectValue)
  newInput.setAttribute('class','cp-input ')
  newInput.setAttribute('name',inputNameInputValue)
  newInput.setAttribute('placeholder',inputPlaceholderInputValue)
  newInput.setAttribute('id',`cp-input-${inputsIdCounter}`)

  const newLabel=create('label')
  newLabel.setAttribute('for',newInput.id)
  newLabel.setAttribute('class','cp-label')
  newLabel.setAttribute('id',`cp-lable-${inputsIdCounter}`)
  newLabel.textContent=inputTitleInputValue

  cpLoginInputsDiv.appendChild(newDiv)
  newDiv.appendChild(newLabel)
  newDiv.appendChild(newInput)


const newInputOption=create('option')
newInputOption.textContent=inputTitleInputValue
newInputOption.value=`${inputsIdCounter++}`
editInputSelect.appendChild(newInputOption)

addInputDiv.style.display='none'
}

})


addNewLink.addEventListener('click',function(e){
  if (addLinkDiv.style.display==='none') {
    addLinkDiv.style.display='block'
    editLinkDiv.style.display='none'
restValues(addLinkDiv)
}else {
  addLinkDiv.style.display='none'
}
})

addLinkButton.addEventListener('click',function(e){
const linkTitleInputValue=linkTitleInput.value.trim()
const linkHrefInputValue=linkHrefInput.value.trim()
if (linkHrefInputValue.length>0&&linkTitleInputValue.length>0) {
  const newLink=create('a')
  newLink.id=`cp-link-${linksIdCounter}`
  newLink.textContent=linkTitleInputValue
  newLink.setAttribute('href',linkHrefInputValue)
  newLink.setAttribute('class','cp-link')
cpLoginForm.insertBefore(newLink,cpLoginForm.childNodes[cpLoginForm.childNodes.length-2])

const newLinkOption=create('option')
newLinkOption.textContent=linkTitleInputValue
newLinkOption.value=`cp-link-${linksIdCounter++}`
editLinkSelect.appendChild(newLinkOption)

}
})
loginFormTiltleInput.addEventListener('input',function(e){
cpLoginFormTitle.textContent=loginFormTiltleInput.value
})

loginFormActionInput.addEventListener('input',function(e){
  cpLoginForm.setAttribute('action',loginFormActionInput.value)
})

editInput.addEventListener('click',function(e){
  if (editInputSelect.style.display==='inline-block') {
editInputSelect.style.display='none'
editInputDiv.style.display='none'
// displayInputs()
}else {
  editInputSelect.style.display='inline-block'
  editInputDiv.style.display='block'
  addInputDiv.style.display='none'

showEditInputs()

}
})

function showEditInputs(){
  const editedInput=document.querySelector(`#cp-input-${editInputSelect.value}`);
  const editedLabel=document.querySelector('#cp-lable-'+editInputSelect.value);
  editInputTitleInput.value=editedLabel.textContent
  editInputNameInput.value=editedInput.name
  editInputPlaceholderInput.value=editedInput.placeholder
     Array.prototype.slice.call(EditInputTypeSelect.options).forEach(function(opt){
      if (opt.value.toLowerCase()==editedInput.type.toLowerCase()) {
        EditInputTypeSelect.selectedIndex= opt.index
      }
    })

}

editInputSelect.addEventListener('change',function(e){
restValues(editInputDiv)
showEditInputs()


})
editInputButton.addEventListener('click',function(){
  const editedInput=document.querySelector(`#cp-input-${editInputSelect.value}`);
  const editedLabel=document.querySelector('#cp-lable-'+editInputSelect.value);
  editedLabel.textContent=editInputTitleInput.value.trim()
  editedInput.type=EditInputTypeSelect.value.trim()
  editedInput.name=editInputNameInput.value.trim()
  editedInput.placeholder=editInputPlaceholderInput.value.trim()
  editInputSelect[editInputSelect.selectedIndex].textContent=editInputTitleInput.value.trim()
})


editLinkBtn.addEventListener('click',function(e){
  if (editLinkDiv.style.display==='block') {
editLinkDiv.style.display='none'
editLinkSelect.style.display='none'
}else {
  editLinkDiv.style.display='block'
  addLinkDiv.style.display='none'
  editLinkSelect.style.display='inline-block'
showEditLink()

}
})

function showEditLink(){
  editLinkTitleInput.value=document.querySelector(`#${editLinkSelect.value}`).textContent
  const href=document.querySelector(`#${editLinkSelect.value}`).href.split('/')
  editLinkHrefInput.value=href[href.length-1]

}
editLinkSelect.addEventListener('change',function(e){
  showEditLink()
})

editLinkButton.addEventListener('click',function(){
  const editedLink=document.querySelector(`#${editLinkSelect.value}`);
  console.log(editLinkSelect.value);
  editedLink.textContent=editLinkTitleInput.value.trim()
  editedLink.href=editLinkHrefInput.value.trim()
  editLinkSelect[editLinkSelect.selectedIndex].textContent=editLinkTitleInput.value.trim()
})
