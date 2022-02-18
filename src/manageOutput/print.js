export default function printMe() {
  console.log('printMe')
  let num = document.createElement('div')
  num.setAttribute('id', 'number')
  num.innerHTML = '2000'
  document.body.appendChild(num)
}

export function addItem(el) {
  let item = document.createElement('p')
  item.classList.add('bg-color')
  item.innerText = 'item'
  el.appendChild(item)

}
