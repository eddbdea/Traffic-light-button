const tenSecondsInterval = 10000;
let index = 1;

function changeLightColour() {
    const colours = ['btn-danger', 'btn-warning', 'btn-success'];
    const button = document.getElementById('button-colour');
    let colourClass= button.getAttribute('class').substring(4);
    console.log(index)
    button.classList.replace(colourClass, colours[index])
    index = (index + 1) % 3;
} 

setInterval(changeLightColour, tenSecondsInterval)