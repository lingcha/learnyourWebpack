import _ from 'lodash';
import printMe from './print.js';
import { addItem } from './print.js';
import "./item.css"
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'insert';
  btn.addEventListener('click',() => {
    addItem(element)
  })
  printMe()
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  // module.hot.accept的第一个参数填入的是模块路径，指的是如果该模块发生变动则执行第二个参数指向的异步函数
  module.hot.accept('./print.js', function() {
    let element = document.querySelector('#number');
    if (element) {
      document.body.removeChild(element)
      printMe()
    }
  })
}
