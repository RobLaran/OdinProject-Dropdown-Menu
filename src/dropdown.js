import "./styles.css";

const dropDown = require('dropdownmenu-odinproject');
const dropdownButtons = document.getElementsByClassName("dropdown-btn");

for(let element of dropdownButtons) {
    element.addEventListener('click', dropDown);
}
