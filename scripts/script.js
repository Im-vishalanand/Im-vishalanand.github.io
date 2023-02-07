let menu=document.getElementById("menu-icon");
let navbar=document.getElementById("navbar");

menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

    