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
