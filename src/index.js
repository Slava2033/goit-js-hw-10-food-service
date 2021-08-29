import './styles.css';
import handlebars from 'handlebars';
import myTemplate from './template.handlebars';
import menu from './utils/menu.json';

const myMenu = menu.reduce((acc,el) => acc + myTemplate(el),'');
const menuBox = document.querySelector(".menu");
const body = document.querySelector('body');
const switchButton = document.querySelector(".theme-switch__toggle")
menuBox.innerHTML = myMenu;
console.dir(switchButton);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const startTheme = localStorage.getItem('siteTheme');
localStorage.getItem('siteTheme') ? body.classList.add(startTheme) : '';

if (startTheme == 'light-theme') {
  switchButton.checked = true;
}
const switchTheme = function (e) {
  if (switchButton.checked) {
  body.classList.contains(`${Theme.LIGHT}`) ? body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`) : body.classList.add(`${Theme.DARK}`)
  } else if (!switchButton.checked) {
  body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}` )
  }
  localStorage.setItem('siteTheme', body.classList);
  
}

switchButton.addEventListener('click', switchTheme);
