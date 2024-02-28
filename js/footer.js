let aux = 0;
const itensLeft = document.getElementById('itemsLeft');
const tarefas = [];
const buttonTodos = document.querySelector('[data-button="todos"]');
const buttonIncompleto = document.querySelector('[data-button="incompleto"]');
const buttonCompleto = document.querySelector('[data-button="completo"]');
const buttonLimparCompleto = document.querySelector('[data-button="limparCompleto"]');

const validaItens = () => {
  tarefas.forEach(tarefa => {
    if (tarefa.isConcluido == false) {
      aux++;
    }
  }) 
  itensLeft.textContent = aux;
  aux = 0;
}

const adicionaItens = (nome, boll) => {
  tarefas.push({nome: nome, isConcluido: boll});
  validaItens();
};

const removeItens = nomeRemover => {
  const index = tarefas.findIndex(tarefa => tarefa.nome == nomeRemover);
  tarefas.splice(index, 1);
  validaItens();
};

let toggleBoll = ( nomeTarefa, bool ) => {
  const index = tarefas.findIndex(tarefa => tarefa.nome == nomeTarefa)
  tarefas[index].isConcluido = bool;
  validaItens();
};

buttonIncompleto.addEventListener('click', () => {
  const lista = document.querySelectorAll('.taskList .task');
  lista.forEach(item => {
    const itemCheckbox = item.querySelector('input').checked;

    if (itemCheckbox) {
      item.parentElement.style.display = 'none';
    } else {
      item.parentElement.style.display = 'flex';
    }
  })
});

buttonCompleto.addEventListener('click', () => {
  const lista = document.querySelectorAll('.taskList .task');
  lista.forEach(item => {
    const itemCheckbox = item.querySelector('input').checked;

    if (!itemCheckbox) {
      item.parentElement.style.display = 'none';
    } else {
      item.parentElement.style.display = 'flex';
    }
  })
});

buttonTodos.addEventListener('click', () => {
  const lista = document.querySelectorAll('.taskList .task');
  lista.forEach(item => {
    item.parentElement.style.display = 'flex';
  })
});

buttonLimparCompleto.addEventListener('click', () => {
  const lista = document.querySelectorAll('.taskList .task');
  lista.forEach(item => {
    const itemCheckbox = item.querySelector('input').checked;
    const id = item.querySelector('input').id;

    if (itemCheckbox) {
      item.parentElement.remove();
      removeItens(id);
    }
  });

  validaFooterDisplay();
})

let validaFooterDisplay = () => {
  if (taskList.childNodes.length <= 1) {
    footer.style.display = 'none';
  }
}