
const styleLogin = [
`.cp-login-form{
  width: 80%;
  position: relative;
    margin: 0 auto;
    background: #ecf0f1;
    width: 350px;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #000000;
    padding: 15px;
}`,`
.cp-login-form-title{
text-align: center;
font-weight: 200;
font-size: 2em;
margin: 10px auto;
color: #34495e;
}`,`
.cp-input{
width: 100%;
margin-bottom: 25px;
height: 40px;
border-radius: 5px;
outline: 0;
-moz-outline-style: none;
border: 1px solid #bbb;
padding: 0 0 0 10px;
font-size: 14px;
}`,`
.cp-link{
  display: block;
text-align: center;
font-size: 20px;
color: #3498db;
}`,`
.cp-button{
  width: 50%;
  height: 35px;
display: block;
background: #e74c3c;
color: white;
font-size: 18px;
font-weight: 200;
cursor: pointer;
border-radius: 25px;
margin: 20px auto;
}`


]
styleLogin.forEach(function (item) {
  styleSheet.insertRule(item, styleSheet.cssRules.length);
});
