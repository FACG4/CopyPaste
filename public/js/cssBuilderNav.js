
const style = [

`  .cp-navbar-container > li {

  display:flex;
  align-items:center;
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
