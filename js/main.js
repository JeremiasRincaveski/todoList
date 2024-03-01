window.addEventListener('load', () => {
  checkBoxPrincipal.checked = false;
  inputPrincipal.value = '';
  inputPrincipal.focus();
  adicionarTarefa('Complete Todo App on Frontend Mentor', false);
  adicionarTarefa('Pick up groceries', false);
  adicionarTarefa('Read for 1 hour', false);
  adicionarTarefa('10 minutes meditation', false);
  adicionarTarefa('Jog around the park 3x', false);
  adicionarTarefa('Complete online JavaScript course', true);
})

tema.addEventListener('click', () => {
  const img = tema.querySelector('img');
  const root = document.documentElement;
  if (root.className.includes('light')) {
    root.classList.remove('light');
    img.src = '/images/icon-sun.svg';
  } else {
    root.classList.add('light');
    img.src = '/images/icon-moon.svg';
  }
})

inputPrincipal.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && !tarefas.some(tarefa => tarefa.nome == inputPrincipal.value)) {
    adicionarTarefa(inputPrincipal.value);
  } else {
    if (e.key == 'Enter' && tarefas.some(tarefa => tarefa.nome == inputPrincipal.value)) {
      animacaoErro();
    }
  }
})

const adicionarTarefa = (tarefa, checked = checkBoxPrincipal.checked) => {
  footer.style.display = 'flex';
  const li = document.createElement('li');
  const newId = tarefa.replaceAll(' ', '');
  li.innerHTML = 
  `
    <div class="task">
      <div class="checkbox">
        <input type="checkbox"> 
        <span></span>
      </div>
      
      <input type="text" placeholder="Create a new todo..." value="${tarefa}" disabled>
      
      <button>
        <img src="/images/icon-cross.svg" alt="botão de excluir a tarefa">
      </button>
    </div>
  `;

  li.draggable = true;

  adicionaItens(tarefa, checked);

  const checkbox = li.querySelector('input[type="checkbox"]');
  const span = li.querySelector('span');
  const input = li.querySelector('input[type="text"]');
  const button = li.querySelector('button');
  
  checkbox.checked = checked;
  
  if (checkbox.checked) {
    span.style.backgroundImage = image;
    input.style.textDecoration = 'line-through';
    input.style.color = 'var(--line-through)';
  } 

  button.addEventListener('click', () => {
    li.remove();
    validaFooterDisplay();
    removeItens(input.value);
  })
  
  taskList.insertBefore(li, taskList.firstChild)
  adicionaRegra(li)
  inputPrincipal.value = '';
}

const animacaoErro = () => {
  const tarefaExistente = document.querySelector(`#${inputPrincipal.value.replaceAll(' ', '')}`).parentElement
  mainTask.classList.add('error');
  tarefaExistente.classList.add('error');
  mainTask.addEventListener('animationend', () => {
    mainTask.classList.remove('error');
    tarefaExistente.classList.remove('error');
  })
}

const validaInput = () => {
  
}