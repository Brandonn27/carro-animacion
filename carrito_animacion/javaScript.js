var animacion = document.querySelector ('.carritoPadre');
var carrito = document.querySelector ('.carrito');
var llanta = document.querySelector ('.llanta');
var llanta2 = document.querySelector ('.llanta2');
var luz = document.querySelector ('.luz');
var fondo = document.querySelector ('.fondo');
var sprite = document.querySelector ('.sprite')


fondo.addEventListener('click', iniciarAnimacion)

function iniciarAnimacion(){
    
    
    
    animacion.style.animationPlayState= "running"
    carrito.style.animationPlayState= "running"
    llanta.style.animationPlayState= "running"
    llanta2.style.animationPlayState= "running"
    luz.style.animationPlayState= "running"
    fondo.style.animationPlayState= "running"
    sprite.style.animationPlayState= "running"
}