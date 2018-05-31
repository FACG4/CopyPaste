const inputWidthInput =document.querySelector('#inputWidthInput')
const inputWidthSelect =document.querySelector('#inputWidthSelect')
const btnWidthInput =document.querySelector('#btnWidthInput')
const btnWidthSelect =document.querySelector('#btnWidthSelect')
const inputheightInput =document.querySelector('#inputheightInput')
const inputheightSelect =document.querySelector('#inputheightSelect')
const btnHeightInput =document.querySelector('#btnHeightInput')
const btnHightSelect =document.querySelector('#btnHightSelect')
inputWidthInput.addEventListener('input',changeInputWidth)
inputWidthSelect.addEventListener('change',changeInputWidth)
function changeInputWidth(){
  if (inputWidthSelect.value==='%') {
    if (inputWidthInput.value>100) {
      inputWidthInput.value=100
    }
    inputWidthInput.max='100'
  }else{
    inputWidthInput.max=''
  }
  inputWidth=`${inputWidthInput.value}${inputWidthSelect.value}`
  cssWriter('.cp-input','width',inputWidth)
}


inputheightSelect.value.value=2.5
inputheightInput.addEventListener('input',changeInputheight)
inputheightSelect.addEventListener('change',changeInputheight)
function changeInputheight(){
  if (inputheightSelect.value==='em') {
    if (inputheightInput.value>4) {
      inputheightInput.value=4
    }
    inputheightInput.max='4'
    inputheightInput.step=.1
  }else{
    inputheightInput.max=''
    inputheightInput.step=1

  }
  inputhieght=`${inputheightInput.value}${inputheightSelect.value}`
  cssWriter('.cp-input','height',inputhieght)
}


btnWidthInput.addEventListener('input',changeBtnWidth)
btnWidthSelect.addEventListener('change',changeBtnWidth)

function changeBtnWidth(){
  if (btnWidthSelect.value==='%') {
    if (btnWidthInput.value>100) {
      btnWidthInput.value=100
    }
    btnWidthInput.max='100'
  }else{
    btnWidthInput.max=''
  }
  btnWidth=`${btnWidthInput.value}${btnWidthSelect.value}`
  cssWriter('.cp-button','width',btnWidth)
}

btnHeightInput.addEventListener('input',changeBtnHight)
btnHightSelect.addEventListener('change',changeBtnHight)

function changeBtnHight(){
  if (btnHightSelect.value==='em') {
    if (btnHeightInput.value>4) {
      btnHeightInput.value=4
      btnHeightInput.step=.1
    }
    btnHeightInput.max='4'
  }else{
    btnHeightInput.max=''
    btnHeightInput.step=1
  }
  btnHeight=`${btnHeightInput.value}${btnHightSelect.value}`
  cssWriter('.cp-button','height',btnHeight)
}
