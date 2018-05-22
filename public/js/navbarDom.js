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


navbarPosition.addEventListener('change', () => {
  if (this.checked) {
    navbarPreview.style.navbarPosition = 'fixed';
  }
})

const paddingLabel = create('span');
paddingLabel.textContent = "Padding";
paddingLabel.setAttribute("style", "margin-left:15px;margin-right:5px;");
navbarPositionContainer.appendChild(paddingLabel);
const paddingInputForNavbar = create('input');
paddingInputForNavbar.setAttribute("type", "number");
navbarPositionContainer.appendChild(paddingInputForNavbar);

paddingInputForNavbar.addEventListener('input', () => {
  navbarPreview.style.paddingInputForNavbar = paddingInputForNavbar.value + 'px';
})

addNewLinkBtn.addEventListener("click", () => {
  const br = document.createElement("br");
  const newLinkTitle = create('input');

  //adding event addEventListene
  newLinkTitle.addEventListener('keyup', (e) => {
    if (e.which == 13) {
      newLiElementInNavbar = create('li');
      newHrefInNavbar = create('a');
      navbarPreview.appendChild(newLiElementInNavbar);
      newLiElementInNavbar.appendChild(newHrefInNavbar);
      newHrefInNavbar.textContent = newLinkTitle.value;

    }
  })
  newLinkTitle.setAttribute("class", "newLinkTitle");
  newLinkTitle.setAttribute("placeholder", "Enter the text of the link...");
  const href = create('span');
  href.setAttribute("style", "margin-left:15px;margin-right:5px;");
  newLinkTitle.setAttribute("style", "margin-left:30px;");
  innerMainSectionForNavbar.appendChild(newLinkTitle);
  const newLinkHref = create('input');

  //adding event addEventListener
  newLinkHref.addEventListener('keyup', (e) => {
    if (e.which == 13) {
      const newHref = newLinkHref.value;
      newHrefInNavbar.setAttribute('href', newHref)

    }
  })

  newLinkHref.setAttribute("class", "newLinkHref");
  innerMainSectionForNavbar.appendChild(href);
  href.textContent = "href";
  innerMainSectionForNavbar.appendChild(newLinkHref);
  newLinkHref.setAttribute("placeholder", "Enter the href...");
  newLinkHref.setAttribute("style", "margin-right:15px;");

  const newLinkFloat = create('span');
  newLinkFloat.textContent = "Float";
  innerMainSectionForNavbar.appendChild(newLinkFloat);
  newLinkFloat.setAttribute("style", "margin-left:15px;margin-right:5px;");
  const floatInner = create('select');
  const option0 = create('option');
  const option1 = create('option');
  const option2 = create('option');
  floatInner.id = "floatInner";
  innerMainSectionForNavbar.appendChild(floatInner);
  option0.text = 'select';
  option1.value = 'left';
  option1.text = 'left';
  option2.value = 'right';
  option2.text = 'right';
  floatInner.appendChild(option0);
  floatInner.appendChild(option1);
  floatInner.appendChild(option2);

  floatInner.addEventListener('change', () => {
    if (floatInner.value === 'left') {
      newLiElementInNavbar.style.float = 'left';
    } else {
      newLiElementInNavbar.style.float = 'right';
    }
  })
  innerMainSectionForNavbar.appendChild(br);
});



// size section
const navWidth = document.getElementById('navWidth');
const navHeight = document.getElementById('navHeight');

navWidth.addEventListener('input', () => {
  navbarPreview.style.width = navWidth.value + 'px';
})

navHeight.addEventListener('input', () => {
  navbarPreview.style.height = navHeight.value + 'px';
})
