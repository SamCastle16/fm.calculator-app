const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const theme = document.getElementById('theme');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === 'reset') {
      display.innerText = '';
    } else if (item.id === 'del') {
      const displayString = display.innerText.toString();
      display.innerText = displayString.substring(0, displayString.length - 1);
    } else if (display.innerText !== '' && item.id === 'equal') {
      // eslint-disable-next-line no-eval
      display.innerText = eval(display.innerText);
    } else if (display.innerText === '' && item.id === 'equal') {
      display.innerText = 'Error 404';
      setTimeout(() => (display.innerText = ''), 1000);
    } else {
      display.innerText += item.id;
    }
  };
});

function toggleTheme() {
  if (theme.getAttribute('href') == 'style-theme-1.css') {
    theme.setAttribute('href', 'style-theme-2.css');
  } else if (theme.getAttribute('href') == 'style-theme-2.css') {
    theme.setAttribute('href', 'style-theme-3.css');
  } else {
    theme.setAttribute('href', 'style-theme-1.css');
  }
}
