/*const menu = document.querySelector('.menu');
const inic = document.querySelector('.login');
const aver = document.querySelectorAll('p');
const form = document.querySelector('.form');
const button2 = document.querySelector ('.secundary-button');
const button1 = document.querySelector ('.primary-button');
const inp1 = document.querySelector('.input-email');
const inp2 = document.querySelector ('.input-password');
const resul = document.querySelector('.result');*/


const sign= document.querySelector('.sign-in'); 
const desk= document.querySelector('.desk_menu');
const mob_icon = document.querySelector ('.mob_bttn');
const menu_mob = document.querySelector ('.contenedor');
const carrito = document.querySelector ('.carrito');
const my_order = document.querySelector ('.caja_mob');





sign.addEventListener('click', toggledesk_menu);
mob_icon.addEventListener('click', togglecontenedor);
carrito.addEventListener('click', togglecaja_mob);







function toggledesk_menu(){
    const ismob_menu_close=menu_mob.classList.contains('inactive');
    const iscarritoclose=my_order.classList.contains('inactive');
    
    if(!iscarritoclose){
        my_order.classList.add('inactive');
    }
    if(!ismob_menu_close){
        menu_mob.classList.add('inactive');
    }

    desk.classList.toggle('inactive');
}
//////////////////////////////////////////////
function togglecontenedor(){

    const iscarritoclose=my_order.classList.contains('inactive');
    const isdesk_sign_close=desk.classList.contains('inactive');
    
    if(!iscarritoclose){
        my_order.classList.add('inactive');
    }
    if(!isdesk_sign_close){
        desk.classList.add('inactive');
    }

    menu_mob.classList.toggle('inactive');
}
//////////////////////////////////////////////////////
function togglecaja_mob(){

    const ismob_menu_close=menu_mob.classList.contains('inactive');
    const isdesk_sign_close=desk.classList.contains('inactive');

    if(!ismob_menu_close){
        menu_mob.classList.add('inactive');
    }

    if(!isdesk_sign_close){
        desk.classList.add('inactive');
    }
    
    
    my_order.classList.toggle('inactive');
}
    







/*form.addEventListener('click', btn1)



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
}*/