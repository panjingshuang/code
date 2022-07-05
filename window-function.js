let button = document.createElement('button')
button.innerHTML = '点击查看选中文本内容'
let text = document.createElement('div')
text.innerHTML = '请复制这行文字查看下能不能window.getSelection能不能拿到呢'
let showText = document.createElement('div')

document.body.appendChild(text)
document.body.appendChild(button)
document.body.appendChild(showText)

// button.onclick = getSelection_
button.onclick = createRange_


function getSelection_(){
  let text_ = window.getSelection() && window.getSelection().toString()
  if(text_ && text_.length > 0){
    showText.innerHTML = text_
  }
}

function createRange_(){
  let range = document.createRange() && document.createRange()
  range.setStartBefore(text, range.startContainer);
  range.setEndAfter(text, 0);
  let text_ = range.toString()
  if(text_ && text_.length > 0){
    showText.innerHTML = text_
  }
}
