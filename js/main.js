window.addEventListener('load', () => {
  checkBoxPrincipal.checked = false;
  inputPrincipal.value = '';
  inputPrincipal.focus();

  iniciarBanco()
  .then(() => {
    tarefas.forEach(tarefa => {
      adicionarTarefa(tarefa.nome, tarefa.iscompleto)
    })
  })
  .then(() => 
  validaItens())
    
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
    adicionarTarefaBanco(inputPrincipal.value, checkBoxPrincipal.checked)
    adicionarTarefa(inputPrincipal.value);
    validaItens();
  } else {
    if (e.key == 'Enter' && tarefas.some(tarefa => tarefa.nome == inputPrincipal.value)) {
      animacaoErro();
    }
  }
})

const adicionarTarefa = (tarefa, checked = checkBoxPrincipal.checked) => {
  footer.style.display = 'flex';
  const li = document.createElement('li');
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
  adicionaRegra(li);
  inputPrincipal.value = '';
}

const animacaoErro = () => {
  const tarefaExistente = document.querySelector(`input[value="${inputPrincipal.value}`).parentElement
  mainTask.classList.add('error');
  tarefaExistente.classList.add('error');
  mainTask.addEventListener('animationend', () => {
    mainTask.classList.remove('error');
    tarefaExistente.classList.remove('error');
  })
}