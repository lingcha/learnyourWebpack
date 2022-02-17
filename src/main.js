import _ from 'lodash'
import "./index.css"
import "./style.scss"
import sum from "./calculate";
function component() {
  const element = document.createElement('div');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component())
console.log(sum(1,1))
