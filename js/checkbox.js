const image = "url(\'/images/icon-check.svg\'), linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";

const adicionaRegra = (elemento) => {
  const div = elemento.querySelector('div');
  const span = div.querySelector('span');
  const checkbox = div.querySelector('input');
  const idInput = checkbox.id.replace('Check', '');
  const input = div.querySelector(`#${idInput}`);

  span.addEventListener('click', () => {
    if (checkbox.checked == true) {
      span.style.backgroundImage = '';
      input.style.textDecoration = '';
      input.style.color = 'var(--very-light-grayish-blue)';
    } else {
      span.style.backgroundImage = image;
      input.style.textDecoration = 'line-through';
      input.style.color = 'var(--dark-grayish-blue)';
    }
    
    checkbox.checked = !checkbox.checked;
  })
}

adicionaRegra(document.querySelector('.mainTask'));