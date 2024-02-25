const checkBoxPrincipal = document.getElementById('inputCheck')
const inputPrincipal = document.getElementById('input');
const taskList = document.querySelector('.taskList');

window.addEventListener('load', () => {
  checkBoxPrincipal.checked = false;
  inputPrincipal.value = '';
})

inputPrincipal.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    const li = document.createElement('li');
    const newId = inputPrincipal.value.replaceAll(' ', '');
    li.innerHTML = 
    `
      <div class="task">
        <div class="checkbox">
          <input type="checkbox" id="${newId}Check"> 
          <span></span>
        </div>
        <input type="text" id="${newId}" placeholder="Create a new todo..." value="${inputPrincipal.value}">
      </div>
    `;

    const checkbox = li.querySelector(`#${newId}Check`);
    const span = li.querySelector('span');
    const input = li.querySelector(`#${newId}`)
    
    checkbox.checked = checkBoxPrincipal.checked;
    
    if (checkbox.checked) {
      span.style.backgroundImage = image;
      input.style.textDecoration = 'line-through';
      input.style.color = 'var(--dark-grayish-blue)';
    }
    
    taskList.insertBefore(li, taskList.firstChild)
    adicionaRegra(li)
  }
})