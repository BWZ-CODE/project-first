const menu = document.querySelector('.menu');
const inic = document.querySelector('.login');
const aver = document.querySelectorAll('p');
const form = document.querySelector('.form');
const button2 = document.querySelector ('.secundary-button');
const button1 = document.querySelector ('.primary-button');
const inp1 = document.querySelector('.input-email');
const inp2 = document.querySelector ('.input-password');
const resul = document.querySelector('.result')

form.addEventListener('click', btn1)


console.log({
    menu,
    inic,
    aver,
    form,
    button1,
    button2,
    inp1,
    inp2,
    resul,
});

button1.add

function btn1(){
    var inputt1=parseInt(inp1.value);   
    var inputt2=parseInt(inp2.value);

    const suma = inputt1 + inputt2;
    resul.innerHTML = "El resultado es " + suma;
}

function btn2(){
    console.log("adsd")
}