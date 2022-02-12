/* MASKS AND VALIDATES*/
const masks = {
    
    tel(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
    },

}

document.querySelectorAll('input').forEach(($input) => {
    const receipt = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[receipt](e.target.value);
    });
});


/* Validation Name */
function validation () {
    var name = document.getElementById('name-input').value

    if ( name == ''){
        alert('Você precisa digitar um nome')
    }

    else if (!!name.match(/[A-Z][a-z]* [A-Z][a-z]*/) == 0) {
        alert('Digite um nome completo, lembre-se das iniciais maiusculas')
    }

    else {
        alert('Formulario Enviado com Sucesso!')
    }
}




/* MODAL AUTOCHECKED ON CLICKED "EU CONCORDO" */
let checkbox = document.querySelectorAll('.form-check-input')
let autoCheckBtn = document.getElementById('btn-check')

autoCheckBtn.addEventListener('click', () => {
    for (let current of checkbox){
        current.checked = true
    }
})


/* SCROOLING ACTION */

document.querySelectorAll('.nav-link').forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        var element = document.querySelector(e.target.dataset.scroll)

        if (element){
            element.scrollIntoView({behavior: 'smooth', block:'center'});
        }

    });
})