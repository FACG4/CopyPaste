const select = function(selector) {
  return document.querySelector(selector);
}

const create = function(element) {
  return document.createElement(element);
}

Object.prototype.insertAfter = function (newNode,fix) {
   this.insertBefore(newNode, fix.nextSibling);
 }

const innerMainSectionForNavbar = select(".innerMainSectionForNavbar");
const editLinksDiv = select(".editLinksDiv");

let linksAddedToNavbar = create('select');
linksAddedToNavbar.setAttribute('id', 'navbarLinks')
const firstOptionInlinksAddedToNavbar = create('option');
firstOptionInlinksAddedToNavbar.text = 'Edit Link';
linksAddedToNavbar.appendChild(firstOptionInlinksAddedToNavbar);
innerMainSectionForNavbar.appendChild(linksAddedToNavbar);

let newHrefInNavbar = '';
let newLiElementInNavbar = '';
const addNewLinkBtn = select(".addNewLinkBtn");
const navbarPositionContainer = select('.navbarPositionContainer')
const navbarPosition = select(".navbarPosition");
const navbarPreview = select(".cp-navbar-container");
const paddingInputForNavbar = select('.paddingInputForNavbar')
const generateCode = select('.generateCodeButton');
const cpNavbarFixHolder = select('#cp-navbar-fix-holder');
const backToEditing = select('.backToEditing');
const navEditContainer = select('.navEditContainer');
const navPreview = select('.navPreview');
const resultContainer = select('.resultContainer');
const navbarHeight = select('.navbarHeight');
const GenerateCodeDiv = select('.GenerateCodeDiv');


paddingInputForNavbar.setAttribute('class', 'newLinkTitle')

let counter = 1;
let flag = false;
let newLinkTitle;
let newLinkHref;
let floatInner;
let floatLabel;
let defaultPositionForNavbar = "static";


navbarPosition.addEventListener('change', function() {
  if (!this.checked) {
    defaultPositionForNavbar = "fixed";
  }
})


paddingInputForNavbar.addEventListener('input', function() {
  document.querySelectorAll('li').forEach(function(e) {
    navbarPreview.style.padding = paddingInputForNavbar.value + 'px';
    e.style.padding = paddingInputForNavbar.value + 'px';
  })
})


addNewLinkBtn.addEventListener("click", function() {

  const br = document.createElement("br");


  if (!flag) {
    newLinkTitle = create('input');
    newLinkHref = create('input');
    floatInner = create('select');
    floatLabel = create('span');


    newLinkTitle.setAttribute('class', 'newLinkTitle');
    newLinkTitle.setAttribute('id', `newLinkTitle-${counter}`)
    newLinkTitle.setAttribute("class", "newLinkTitle");
    newLinkTitle.setAttribute("placeholder", "Enter the text of the link...");

    newLinkHref.setAttribute("placeholder", "Enter the href of the link...");
    newLinkHref.setAttribute("class", "newLinkHref")
    floatInner.setAttribute('class', 'floatInner');
    newLinkHref.setAttribute('id', `newLinkHref-${counter}`);
    floatLabel.textContent='Float';

    innerMainSectionForNavbar.appendChild(newLinkTitle);
    innerMainSectionForNavbar.appendChild(newLinkHref);
    innerMainSectionForNavbar.appendChild(floatLabel);
    innerMainSectionForNavbar.appendChild(floatInner);

    const option0 = create('option');
    const option1 = create('option');
    const option2 = create('option');
    floatInner.id = "floatInner";
    option0.text = 'Float';
    option1.value = `left-${counter}`;
    option1.text = 'left';
    option1.selected=true;
    option2.value = `right-${counter}`;
    option2.text = 'right';
    floatInner.appendChild(option0);
    floatInner.appendChild(option1);
    floatInner.appendChild(option2);

    flag = true;
  } else if (flag === true) {
    newLiElementInNavbar = create('li');
    newLiElementInNavbar.setAttribute('id', `newLiElementInNavbar-${counter}`)
    newLiElementInNavbar.setAttribute('class', `cp-list`);
    newHrefInNavbar = create('a');
    navbarPreview.appendChild(newLiElementInNavbar);
    newLiElementInNavbar.appendChild(newHrefInNavbar);
    newHrefInNavbar.textContent = newLinkTitle.value;

    const newHref = newLinkHref.value;
    newHrefInNavbar.setAttribute('href', newHref)

    newLinkHref.setAttribute("class", "newLinkHref");

    let id = floatInner.value.split('-')[1];
    let floatValueSelected = floatInner.value.split('-')[0];

    if (floatValueSelected === 'left') {
      navbarPreview.insertBefore(newLiElementInNavbar, cpNavbarFixHolder);
    }
     else if (floatValueSelected === 'right') {
       navbarPreview.insertAfter(newLiElementInNavbar, navbarPreview.lastChild);
    }

    document.querySelectorAll('ul').forEach(function(e) {
      e = create('option');
      e.textContent = select(`#newLiElementInNavbar-${id}`).getElementsByTagName('a')[0].textContent;
      linksAddedToNavbar.appendChild(e)
    })

    innerMainSectionForNavbar.removeChild(newLinkTitle);
    innerMainSectionForNavbar.removeChild(newLinkHref);
    innerMainSectionForNavbar.removeChild(floatLabel);
    innerMainSectionForNavbar.removeChild(floatInner);

    flag = false;
    counter++;
  }
});



// generate code button >>>>>>>>>>>>>>>>>>>>
generateCode.addEventListener('click', function(){
  navEditContainer.style.display = 'none';
  navPreview.style.display = 'none';
  GenerateCodeDiv.style.display = 'none';
  resultContainer.style.display = 'block';
  backToEditing.style.display = 'block';
})

backToEditing.addEventListener('click' , function(){
  navEditContainer.style.display = 'block';
  navPreview.style.display = 'block';
  GenerateCodeDiv.style.display = 'block';
  resultContainer.style.display = 'none';
  backToEditing.style.display = 'none';
})







let editFlag = false;

linksAddedToNavbar.onchange = function(e) {

  let el1 = document.getElementById(`newLiElementInNavbar-${e.target.selectedIndex}`).textContent;
  let link1 = document.getElementById(`newLiElementInNavbar-${e.target.selectedIndex}`).getElementsByTagName('a')[0].getAttribute("href");
  let editTextInput = create('input');
  let editLinkInput = create('input');
  let editFloat = create('select');
  let editButton = create('input');

  editTextInput.value = el1;
  editLinkInput.value = link1;
  editButton.setAttribute('type', 'button');
  editButton.setAttribute('value', 'Edit Link');

  editTextInput.setAttribute("class", "newLinkHref")
  editLinkInput.setAttribute("class", "newLinkHref")
  editButton.setAttribute("class", "editBtn")
  editFloat.setAttribute('class', 'editFloat');

  editLinksDiv.appendChild(editTextInput);
  editLinksDiv.appendChild(editLinkInput);
  editLinksDiv.appendChild(editFloat);
  editLinksDiv.appendChild(editButton);

  const option00 = create('option');
  const option01 = create('option');
  const option02 = create('option');
  option00.text = 'Float';
  option01.value = `left`;
  option01.text = 'left';
  option02.value = `right`;
  option02.text = 'right';
  editFloat.appendChild(option00);
  editFloat.appendChild(option01);
  editFloat.appendChild(option02);

  editButton.addEventListener('click', function() {
    if (!editFlag) {
      document.getElementById(`newLiElementInNavbar-${e.target.selectedIndex}`).getElementsByTagName('a')[0].textContent = editTextInput.value;
      document.getElementById(`newLiElementInNavbar-${e.target.selectedIndex}`).getElementsByTagName('a')[0].href = editLinkInput.value;
      if (editFloat.value === 'left') {
        navbarPreview.insertBefore(document.getElementById(`newLiElementInNavbar-${e.target.selectedIndex}`), cpNavbarFixHolder);
      }
       else if (editFloat.value === 'right') {
         navbarPreview.insertAfter(document.getElementById(`newLiElementInNavbar-${e.target.selectedIndex}`), navbarPreview.lastChild);
      }

      linksAddedToNavbar.options[linksAddedToNavbar.selectedIndex].textContent = editTextInput.value;
      editFlag = true;
    }
    if (editFlag) {
      editLinksDiv.removeChild(editTextInput);
      editLinksDiv.removeChild(editLinkInput);
      editLinksDiv.removeChild(editButton);
      editLinksDiv.removeChild(editFloat);
      editFlag = false;
    }
  })


}
