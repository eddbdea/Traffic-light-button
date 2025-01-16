const tenSecondsInterval = 10000;
let index = 0;

function changeLightColour() {
    const colours = ['btn-danger', 'btn-warning', 'btn-success'];
    const button = document.getElementById('button-colour');
    let colourClass= button.getAttribute('class').substring(4);
    if (index < 2) {
        button.classList.replace(colourClass, colours[index + 1]);
        ++index;
    } else {
        index = 0;
        button.classList.replace(colourClass, colours[index]);
    }
}

setInterval(changeLightColour, tenSecondsInterval)