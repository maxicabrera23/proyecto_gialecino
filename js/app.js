let modal = document.querySelector('#modal');
let imagenes = document.querySelectorAll('#galeria img');
let modal_imagen = document.querySelector('#mostrar_modal');
let cerrar = document.querySelector('#cerrar');
/*
let derecha = document.querySelector('#derecha');
let izquierda = document.querySelector('#izquieda');
*/


/*mostra la imagen mas grande*/

imagenes.forEach(imagen => {

    imagen.addEventListener('click',()=>{
        modal.style.display="flex";
        modal_imagen.src = imagen.src;
        
        
        });

});

/*cerrar la image al hacer click en la x*/

cerrar.addEventListener('click',() => {
    modal.style.display="none";
});

/*cambiar la imagen a la derecha

derecha.addEventListener('click',() => {
    imagen_actual= document.querySelector('#mostrar_modal')
    console.log(imagen_actual.src);
});*/


