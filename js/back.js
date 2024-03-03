const url = 'https://meu-todo-app-848f18ed2506.herokuapp.com'

const iniciarBanco = () => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição')
      }

      return response.json();
    })
    .then(data => {
      data.forEach(tarefa => {
        tarefas.push(tarefa)
      });
    })
    .catch(error => {
      console.log('Error:', error);
    })
}

const adicionarTarefaBanco = (tarefa, bool) => {
  fetch(url + '/adicionar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({tarefa: tarefa, iscompleto: bool})
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao adicionar');
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta recebida:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  })
}

const modificaTarefaBanco = (tarefa, bool) => {
  fetch(url + '/modificar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({tarefa: tarefa, iscompleto: bool})
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao modificar');
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta recebida:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  })
}

const deletarTarefaBanco = (tarefa) => {
  fetch(url + '/deletar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({tarefa: tarefa})
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao deletar');
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta recebida:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}