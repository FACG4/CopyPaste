const select = (selector) => {
  return document.querySelector(selector);
}

const create = (element) => {
  return document.createElement(element);
}

let newHrefInNavbar = '';
let newLiElementInNavbar = '';
const addNewLinkBtn = select(".addNewLinkBtn");
const navbarPositionContainer = select('.navbarPositionContainer')
const innerMainSectionForNavbar = select(".innerMainSectionForNavbar");
const navbarPosition = select(".navbarPosition");
const navbarPreview = select(".preview");
const paddingInputForNavbar = select('.paddingInputForNavbar')
const generateCodeButton = select('.generateCodeButton');
const finalCssCode = select('.finalCssCode');
const finalHtmlCode = select('.finalHtmlCode');
const navEditContainer = select('.navEditContainer');
const navPreview = select('.navPreview');
const htmlCode = select('.htmlCode');
const cssCode = select('.cssCode');
const resultContainer = select('.resultContainer');
const backToEditing = select('.backToEditing');
const navHeight = select('#navHeight');



let counter = 0;
let flag = false;
let newLinkTitle;
let newLinkHref;
let floatLabel;
let floatInner;
let defaultPositionForNavbar = "static";
let defaultPAddingForNavbar = "x";
let navbarHeight = '50';




navbarPosition.addEventListener('change', function() {
  if (!this.checked) {
defaultPositionForNavbar = "fixed";
  }
})


paddingInputForNavbar.addEventListener('input', function() {
  navbarPreview.style.padding = paddingInputForNavbar.value + 'px';
  defaultPAddingForNavbar=paddingInputForNavbar.value ;
})

navHeight.addEventListener('input', function() {
  navbarPreview.style.height = navHeight.value + 'px';
    navbarHeight=navHeight.value ;
})

addNewLinkBtn.addEventListener("click", function() {

  const br = document.createElement("br");


  if (flag === false) {
    newLinkTitle = create('input');
    newLinkHref = create('input');
    floatInner = create('select');
    floatLabel = create('span');


    newLinkTitle.setAttribute('class', 'newLinkTitle');
    newLinkTitle.setAttribute('id', `newLinkTitle-${counter}`)
    newLinkTitle.setAttribute("class", "newLinkTitle");
    newLinkTitle.setAttribute("placeholder", "Enter the text of the link...");
    floatLabel.setAttribute("class", "label")

    newLinkHref.setAttribute("placeholder", "Enter the href of the link...");
    newLinkHref.setAttribute("class", "newLinkHref")
    newLinkHref.setAttribute('id', `newLinkHref-${counter}`)
    floatInner.setAttribute('class', 'floatInner');

    innerMainSectionForNavbar.appendChild(newLinkTitle);
    innerMainSectionForNavbar.appendChild(newLinkHref);
    innerMainSectionForNavbar.appendChild(floatLabel);
    innerMainSectionForNavbar.appendChild(floatInner);

    floatLabel.textContent = "Float";
    const option0 = create('option');
    const option1 = create('option');
    const option2 = create('option');
    floatInner.id = "floatInner";
    option0.text = 'select';
    option1.value = `left-${counter}`;
    option1.text = 'left';
    option2.value = `right-${counter}`;
    option2.text = 'right';
    floatInner.appendChild(option0);
    floatInner.appendChild(option1);
    floatInner.appendChild(option2);

    flag = true;
  } else if (flag === true) {

    newLiElementInNavbar = create('li');
    newLiElementInNavbar.setAttribute('id', `newLiElementInNavbar-${counter}`)
    newHrefInNavbar = create('a');
    navbarPreview.appendChild(newLiElementInNavbar);
    newLiElementInNavbar.appendChild(newHrefInNavbar);
    newHrefInNavbar.textContent = newLinkTitle.value;
    // newHrefInNavbar.textContent = select(`#newLinkTitle-${counter}`).value;

    const newHref = newLinkHref.value;
    newHrefInNavbar.setAttribute('href', newHref)

    newLinkHref.setAttribute("class", "newLinkHref");
    floatLabel.setAttribute('class', 'floatLabel')



    let id = floatInner.value.split('-')[1];
    let float = floatInner.value.split('-')[0];

    if (float === 'left') {
      select(`#newLiElementInNavbar-${id}`).style.float = 'left';
    } else {
      select(`#newLiElementInNavbar-${id}`).style.float = 'right';
    }


    innerMainSectionForNavbar.removeChild(newLinkTitle);
    innerMainSectionForNavbar.removeChild(newLinkHref);
    innerMainSectionForNavbar.removeChild(floatLabel);
    innerMainSectionForNavbar.removeChild(floatInner);

    flag = false;
    counter++;
  }
});







// generate code button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
generateCodeButton.addEventListener('click', function(){



  navEditContainer.style.display = 'none';
  navPreview.style.display = 'none';
  generateCodeButton.style.display = 'none';


  resultContainer.style.display = 'block';
  backToEditing.style.display = 'block';


  finalCssCode.innerHTML = `ul{
    padding: ${paddingInputForNavbar.value}px;<br>
    position: ${defaultPositionForNavbar};<br>
    height: ${navbarHeight}px;<br>
    background-color:;<br>
    width: 100%;} <br><br>
    li a {<br>
    padding: ${defaultPAddingForNavbar}
    }
    `

finalHtmlCode.textContent = `<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right"><a class="active" href="#about">About</a></li>
</ul>`
})


backToEditing.addEventListener('click' , function(){
  navEditContainer.style.display = 'block';
  navPreview.style.display = 'block';
  generateCodeButton.style.display = 'block';


  resultContainer.style.display = 'none';
  backToEditing.style.display = 'none';


})
