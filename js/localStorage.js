const tarefasIniciais = [
  {
    nome: 'Complete Todo App on Frontend Mentor',
    IsCompleto: false
  },
  {
    nome: 'Pick up groceries', 
    IsCompleto: false
  },
  {
    nome: 'Read for 1 hour',
    IsCompleto: false
  },
  {
    nome: '10 minutes meditation', 
    IsCompleto: false
  },
  {
    nome: 'Jog around the park 3x', 
    IsCompleto: false
  },
  {
    nome: 'Complete online JavaScript course', 
    IsCompleto: true
  }
]

const salvarTarefas = (tarefas) => {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

const recuperarTarefas = () => {
  const tarefasLocalStorage = localStorage.getItem('tarefas');
  return tarefasLocalStorage ? JSON.stringify(tarefasLocalStorage) : [];
}

const inicializarTarefas = () => {
  console.log(localStorage.getItem('primeiroLogin'));
  if (true) {
    salvarTarefas(tarefasIniciais);
    localStorage.setItem('primeiroLogin', 'false')
    return recuperarTarefas();
  } else {
    return recuperarTarefas();
  }
}
