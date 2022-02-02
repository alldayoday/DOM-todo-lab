

const newLi = document.createElement('li')
const btn = document.querySelector('button') 



btn.addEventListener('click', function(event) {
  const newLi = document.createElement('li')
  const imp = document.querySelector('input')
  newLi.textContent = imp.value
  if (imp.value !== '') {
  document.querySelector('ul').appendChild(newLi)
  imp.value = ''
  }
});

// const rest = document.getElementById('rest')

// rest.addEventListener('click', function(lis){
//   document.getElementById('todo-list').innerHTML = ''
// });
