window.addEventListener('load', () => {
  checkBoxPrincipal.checked = false;
  inputPrincipal.value = '';
  inputPrincipal.focus();
})

inputPrincipal.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    footer.style.display = 'flex';
    const li = document.createElement('li');
    const newId = inputPrincipal.value.replaceAll(' ', '');
    li.innerHTML = 
    `
      <div class="task">
        <div class="checkbox">
          <input type="checkbox" id="${newId}Check"> 
          <span></span>
        </div>
        
        <input type="text" id="${newId}" placeholder="Create a new todo..." value="${inputPrincipal.value}" disabled>
        
        <button>
          <img src="/images/icon-cross.svg" alt="botão de excluir a tarefa">
        </button>
      </div>
    `;

    adicionaItens(inputPrincipal.value, checkBoxPrincipal.checked);

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

      if (taskList.childNodes.length <= 1) {
        footer.style.display = 'none';
      }

      removeItens(inputPrincipal.value);
    })
    
    taskList.insertBefore(li, taskList.firstChild)
    adicionaRegra(li)
    inputPrincipal.value = '';
  }
})