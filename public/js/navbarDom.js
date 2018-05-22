var newA ='';
var newLi = '';
var positionCss  = 'static';
var paddingCss  =0;
var floatCss  = 'left';
var generate = select('#generate');
var resultsCssUl = select('#resultsCssUl');
var resultsCssLi = select('#resultsCssLi');
var resultsHtml = select('#resultsHtml');
var finalHtml='';


function select(selector) {
  return document.querySelector(selector);
}

function create(element) {
  return document.createElement(element);
}
var addLink = select(".addLink");
var addLinkBtn = select('.addLinkBtn')
var positionContainer = select('.positionContainer')
var innerMain = select(".innerMain");
var position = select(".position");
var preview = select(".preview");



position.addEventListener('change', function(){
  if(this.checked){
    preview.style.position = 'fixed';
    positionCss = 'fixed';

  }
})


var text1 = create('span');
text1.textContent = "Padding";
text1.setAttribute("style", "margin-left:15px;margin-right:5px;");

var text2 = create('span');

text2.setAttribute("style", "margin-left:15px;margin-right:5px;");
positionContainer.appendChild(text1);
var padding = create('input');
padding.setAttribute("type", "number");
positionContainer.appendChild(padding);

padding.addEventListener('input', function(){
  console.log(preview);
  preview.style.padding=padding.value+'px';
  paddingCss = padding.value;
})


addLink.addEventListener("click", function() {

  var br = document.createElement("br");
  var textInput = create('input');

  //adding event addEventListene
  textInput.addEventListener('keyup' , function(e){
      if (e.which == 13) {
         newLi = create('li');
         newA = create('a');
        preview.appendChild(newLi);
        newLi.appendChild(newA);
        newA.textContent = textInput.value;

      }
  })
  textInput.setAttribute("class", "textInput");
  textInput.setAttribute("placeholder", "Enter the text of the link...");
  var text = create('span');
  text.setAttribute("style", "margin-left:15px;margin-right:5px;");
  textInput.setAttribute("style", "margin-left:30px;");
  innerMain.appendChild(textInput);


  var linkInput = create('input');

  //adding event addEventListener
  linkInput.addEventListener('keyup' , function(e){
    if (e.which == 13) {
var newHref = linkInput.value;
newA.setAttribute('href' , newHref)
finalHtml  = `<li><a href=${newHref}>${textInput.value}</a></li>`
    }
  })


   linkInput.setAttribute("class", "linkInput");
  innerMain.appendChild(text);
  text.textContent = "href";
  innerMain.appendChild(linkInput);
  linkInput.setAttribute("placeholder", "Enter the href...");
  linkInput.setAttribute("style", "margin-right:15px;");


  var text3 = create('span');
  text3.textContent = "Float";
  innerMain.appendChild(text3);
  text3.setAttribute("style", "margin-left:15px;margin-right:5px;");
  var floatInner = create('select');
  var option00 = create('option');
  var option11 = create('option');
  var option22 = create('option');
  floatInner.id = "floatInner";
  innerMain.appendChild(floatInner);
  option00.text = 'select';
  option11.value = 'left';
  option11.text = 'left';
  option22.value = 'right';
  option22.text = 'right';
  floatInner.appendChild(option00);
  floatInner.appendChild(option11);
  floatInner.appendChild(option22);

  floatInner.addEventListener('change', function(){

    if(floatInner.value==='left'){
      newLi.style.float = 'left';
      floatCss = 'left';
    }
    else {
      newLi.style.float = 'right';
      floatCss = 'right';

    }
  })

  innerMain.appendChild(br);
});





// generate event listener
generate.addEventListener('click' , function(){

 var bre = create('br');

    resultsCssUl.innerHTML = `.ul {
      position: ${positionCss};<br>
padding: ${paddingCss};<br>
    }`;

console.log(finalHtml);
    resultsHtml.textContent = finalHtml;









});
