let setColorScheme = (colorScheme) => {
  let content = 'dark light';
  switch (colorScheme) {
    case 'dark':
      content = 'dark';
      break;
    case 'light':
      content = 'light';
      break;
    case 'default':
      break;
    default:
      throw Error("Invalid color scheme.");
  }
  localStorage.setItem('theme', colorScheme);
  document.querySelector('meta[name="color-scheme"]').setAttribute('content', content);
}

let select = document.getElementById('color-scheme-selector');
let schemes = select.getElementsByTagName('input');

let currentTheme = localStorage.getItem('theme');
if (currentTheme != undefined) {
  setColorScheme(currentTheme);
}

for (let scheme of schemes) {
  if (scheme.value === currentTheme) {
    scheme.click();
  }

  scheme.addEventListener('input', (el) => { setColorScheme(el.target.value); });
}

