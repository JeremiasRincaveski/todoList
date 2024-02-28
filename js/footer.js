let aux = 0;
const itensLeft = document.getElementById('itemsLeft');
const tarefas = []

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
}

const removeItens = nomeRemover => {
  const index = tarefas.findIndex(tarefa => tarefa.nome == nomeRemover);
  tarefas.splice(index, 1);
  validaItens();
}

let toggleBoll = ( nomeTarefa, bool ) => {
  const index = tarefas.findIndex(tarefa => tarefa.nome == nomeTarefa)
  tarefas[index].isConcluido = bool;
  validaItens();
}