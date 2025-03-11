const dropdownButtons = document.getElementsByClassName("dropdown-btn");

for(let element of dropdownButtons) {
    element.addEventListener("click", dropDown);
}

function dropDown(event) {
    const dropdown = event.target.parentElement;
    const dropdownContent = dropdown.lastElementChild;

    if (dropdownContent.style.maxHeight) {
        // Collapse dropdown
        dropdownContent.style.maxHeight = null;     
        dropdownContent.style.opacity = "0";
    } else {
        // Expand dropdown dynamically
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        dropdownContent.style.opacity = "1";
    }
}