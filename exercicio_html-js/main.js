const form = document.getElementById('form-submeter');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');

console.log(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (campoA.valueAsNumber >= campoB.valueAsNumber) {
        alert('Campo B deve ser maior que campo A');
    } else {
        alert('formulário enviado com sucesso!');
        campoA.value = null;
        campoB.value = null;
    }
    

})