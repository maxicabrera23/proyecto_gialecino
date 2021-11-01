/*--------------------------------------antes y despues-------------------------------------------------------- */


let modal_a = document.querySelector('#modal_a');
let imagenes_a = document.querySelectorAll('#galeria_a img');
let modal_imagen_a = document.querySelector('#mostrar_modal_a');
let cerrar_a = document.querySelector('#cerrar_a');
/*
let derecha_a = document.querySelector('#derecha_a')
let izquierda_a = document.querySelector('#izquieda_a')
*/


/*mostra la imagen mas grande*/

imagenes_a.forEach(imagen_a => {

    imagen_a.addEventListener('click',()=>{
        modal_a.style.display="flex";
        modal_imagen_a.src = imagen_a.src;
        
        
        });

});

/*cerrar la image al hacer click en la x*/

cerrar_a.addEventListener('click',() => {
    modal_a.style.display="none";
});

/*cambiar la imagen a la derecha

derecha.addEventListener('click',() => {
    imagen_actual= document.querySelector('#mostrar_modal')
    console.log(imagen_actual.src);
});*/