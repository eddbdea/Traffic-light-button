
function changeLightColour(){
    const button = document.getElementById('button-colour')
    if (button.classList.contains('btn-danger')) {
        button.classList.replace('btn-danger', 'btn-warning')    
    } else if (button.classList.contains('btn-warning')) {
        button.classList.replace('btn-warning', 'btn-success')
    } else if (button.classList.contains('btn-success')) {
        button.classList.replace('btn-success', 'btn-danger')
    }
}

setInterval(changeLightColour, 10000)