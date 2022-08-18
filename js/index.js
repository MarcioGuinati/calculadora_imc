function start(){
    var buttonCalcularImc = document.querySelector('#calcular-imc');
    buttonCalcularImc.addEventListener('click', handleButtonClick);

    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');

    inputPeso.addEventListener('input', handleButtonClick);
    inputAltura.addEventListener('input', handleButtonClick);
}


function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function handleButtonClick() {
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');
    var imcResultado = document.querySelector('#imc-resultado');

    var peso =  Number (inputPeso.value);
    var altura = Number (inputAltura.value);

    var imc = calcularImc (peso, altura);
    var formatarImc = imc.toFixed(2).replace('.',',');
    
    imcResultado.textContent = formatarImc;
}

start();

