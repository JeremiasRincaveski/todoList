const checkBoxPrincipal = document.getElementById('inputCheck')
const inputPrincipal = document.getElementById('input');
const taskList = document.querySelector('.taskList');

window.addEventListener('load', () => {
  console.log(checkBoxPrincipal.checked);
  checkBoxPrincipal.checked = false;
  inputPrincipal.value = '';
  console.log(checkBoxPrincipal.checked);
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
        
        <button>
          <img src="/images/icon-cross.svg" alt="botão de excluir a tarefa">
        </button>
      </div>
    `;

    const checkbox = li.querySelector(`#${newId}Check`);
    const span = li.querySelector('span');
    const input = li.querySelector(`#${newId}`);
    const button = li.querySelector('button');
    
    checkbox.checked = checkBoxPrincipal.checked;
    
    if (checkbox.checked) {
      span.style.backgroundImage = image;
      input.style.textDecoration = 'line-through';
      input.style.color = 'var(--dark-grayish-blue)';
    }

    button.addEventListener('click', () => {
      li.remove();
    })
    
    taskList.insertBefore(li, taskList.firstChild)
    adicionaRegra(li)
  }
})