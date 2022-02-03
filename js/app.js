

const newLi = document.createElement('li')
const btn = document.querySelector('button') 
const list = document.querySelector("todo-list")
const rest = document.getElementById('rest')



btn.addEventListener('click', function(event) {
  const newLi = document.createElement('li')
  const imp = document.querySelector('input')
  newLi.textContent = imp.value
  if (imp.value !== '') {
  document.querySelector('ul').appendChild(newLi)
  imp.value = ''
  }
});

rest.addEventListener('click', init)
function init (){
  document.getElementById('todo-list').innerHTML = ''
}
