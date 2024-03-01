const mainTask = document.querySelector('.mainTask div');
const checkBoxPrincipal = document.getElementById('inputCheck');
const inputPrincipal = document.getElementById('input');
const taskList = document.querySelector('.taskList');
const footer = document.querySelector('.footer');
const image = "url(\'/images/icon-check.svg\'), linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
const tema = document.querySelector('[data-css="tema"]');

const adicionaRegra = (elemento) => {
  const div = elemento.querySelector('div');
  const span = div.querySelector('span');
  const checkbox = div.querySelector('input');
  const input = div.querySelector('input[type="text"]');

  span.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked == false) {
      span.style.backgroundImage = '';
      input.style.textDecoration = '';
      input.style.color = 'var(--color)';
      span.style.webkitMask = 'linear-gradient(var(--Very-Light-Gray) 0 0) padding-box, linear-gradient(var(--Very-Light-Gray) 0 0)';
      span.style.maskComposite = 'exclude';
    } else {
      span.style.mask = 'none'
      span.style.backgroundImage = image;
      input.style.textDecoration = 'line-through';
      input.style.color = 'var(--line-through)';
    }
    if (input.value != inputPrincipal.value) {
      toggleBoll(input.value, checkbox.checked)
    }
  })
}

adicionaRegra(document.querySelector('.mainTask'));