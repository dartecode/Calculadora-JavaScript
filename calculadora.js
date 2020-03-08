const numeros = document.getElementsByName('data-number');
const operaciones = document.getElementsByName('data-opera');
const borrar = document.getElementsByName('data-delete');
const igual = document.getElementsByName('data-equal');

var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

numeros.forEach((boton) => {
    boton.addEventListener('click', ()=>{
        agregarNumero(boton.innerText);
    });
});

operaciones.forEach((boton) => {
    boton.addEventListener('click', ()=> {
        selectOperacion(boton.innerText);
    });
});

borrar.forEach((boton) => {
    boton.addEventListener('click', ()=> {
        clear();
        actualizarDisplay();
    });
});

igual.forEach((boton) => {
    boton.addEventListener('click', ()=> {
        calcular();
        actualizarDisplay();
    });
});

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay () {
    result.value = opeActual;
}

function clear () {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function selectOperacion (op) {
    if(opeActual === '') return;
    if(opeActual !== ''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular () {
    var calculo;
    var anterior = parseFloat(opeAnterior);
    var actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) 
        return;

    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default: return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

clear();