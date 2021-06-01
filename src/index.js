import './styles.css';
import './index.html';
import menuInfo from "./menu";
import menuItem from "./menu.handlebars"

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const refs = {
    checkBox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu')
}
let defaultCondition = JSON.parse(localStorage.getItem("light-theme"));

// change theme

function changeTheme(){
    refs.checkBox.addEventListener('change',(event)=>{
        localStorage.setItem('defaultTheme', event.target.checked);
        defaultCondition = JSON.parse(localStorage.getItem("defaultTheme"));

        if (defaultCondition === false || defaultCondition === null) {
            refs.body.classList.add(`${Theme.LIGHT}`);
            refs.body.classList.remove(`${Theme.DARK}`);
            refs.checkBox.checked = defaultCondition;
          } else {
            refs.body.classList.remove(`${Theme.LIGHT}`);
            refs.body.classList.add(`${Theme.DARK}`);
            refs.checkBox.checked = defaultCondition;
          }
    });
}
changeTheme();

// create list

menuInfo.forEach((item) => {
    let markup = menuItem(item);
    refs.menu.innerHTML += markup;
});