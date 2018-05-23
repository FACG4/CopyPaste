var styleEl = document.createElement('style')
document.head.appendChild(styleEl);
var styleSheet = styleEl.sheet;
 cssWriter=(selector, property, value)=> {
	selector = selector.toLowerCase();
	property = property.toLowerCase();
	value = value.toLowerCase();

	for(var i = 0; i < styleSheet.cssRules.length; i++) {
		var rule = styleSheet.cssRules[i];
		if(rule.selectorText === selector) {
			rule.style[property] = value;
			return;
		}
	}

	styleSheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}


var style=
[

`
.preview {
width:100%;
height: 50px;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
border: 1px solid #e7e7e7;
background-color: #9bbef7;
margin-bottom: 50px;

}`,`
li {
float: left;
padding-bottom:80%;
text-align: center;

}`,`

li a {
display: block;
color: #666;
text-align: center;
padding: 14px 16px;
text-decoration: none;
}
`
]
style.forEach(item=>{
  styleSheet.insertRule(item, styleSheet.cssRules.length);
})
