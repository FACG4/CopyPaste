const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const styleSheet = styleEl.sheet;
cssWriter = function(selector, property, value){
  selector = selector.toLowerCase();
  property = property.toLowerCase();
  value = value.toLowerCase();

  for (let i = 0; i < styleSheet.cssRules.length; i++) {
    const rule = styleSheet.cssRules[i];
    if (rule.selectorText === selector) {
      rule.style[property] = value;
      return;
    }
  }

  styleSheet.insertRule( selector +  '{' + property+ ':' + value + ';}', 0);
};



const style = [

`  .cp-navbar-container > li {
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    list-style-type: none;
  }`,
`
.cp-navbar-container > li a {
  font-size: 2em;
  color: #ffeead;
  text-decoration:none;
}
`,

` .cp-navbar-container {
    display: flex;
    background-color: #96ceb4;

  }`,

  `#cp-navbar-fix-holder {
    flex: 1;
  }`,

  `@media all and (max-width: 600px) {
    .cp-navbar-container {
      flex-wrap: wrap;
    }
    .cp-navbar-container > li {
      flex-basis: 50%;
    }

    #cp-navbar-fix-holder {
      order: 1;
    }
  }`,

  `@media all and (max-width: 400px) {
    .cp-navbar-container > li {
      flex-basis: 100%;
    }
    #cp-navbar-fix-holder {
      display:none;
    }
  }`

]
style.forEach(function (item) {
  styleSheet.insertRule(item, styleSheet.cssRules.length);
});
