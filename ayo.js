const nav = document.querySelector('#nav-bur');
const barras = document.querySelector('#barras');

barras.addEventListener('click' , traer => {
    nav.classList.toggle('nav2');
    // if(nav.classList.contains('nav2') == true){
    //     window.addEventListener('click' , function(e) {
    //         if (nav.contains(e.target) == false) {
    //             nav.classList.toggle('nav2');
    //         }
    //     })
    // }
})


