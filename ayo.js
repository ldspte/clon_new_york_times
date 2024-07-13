const nav = document.querySelector('#nav-bur');
const barras = document.querySelector('#barras');
const fondo = document.querySelector('.fondonav');

barras.addEventListener('click' , traer => {
    nav.classList.toggle('nav2');
    fondo.classList.toggle('fondoopen');
    // if(nav.classList.contains('nav2') == true){
    //     window.addEventListener('click' , function(e) {
    //         if (nav.contains(e.target) == false) {
    //             nav.classList.toggle('nav2');
    //         }
    //     })
    // }
})


fondo.addEventListener('click', guardar => {
    nav.classList.toggle('nav2');
    fondo.classList.toggle('fondoopen');
})


