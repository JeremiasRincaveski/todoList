let dragged;

taskList.addEventListener('dragstart', (e) => {
  e.target.classList.add('dragged');
  dragged = e.target;
})

taskList.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragged');
})

taskList.addEventListener('dragover', (e) => {
  const applyAfter = getNewPosition(e.clientY);

  if (e.target.parente == dragged.parente) { 
    if (applyAfter) {
      applyAfter.insertAdjacentElement('afterend', dragged)
    } else {
      taskList.prepend(dragged)
    }
  }
})

const getNewPosition = posY => {
  const liNotDragged = taskList.querySelectorAll('li:not(.dragged)');
  let result;

  for (const referCard of liNotDragged) {
    const box = referCard.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = referCard;
  }

  return result
}