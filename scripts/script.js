let menu=document.getElementById("menu-icon");
let navbar=document.getElementById("navbar");
let m=document.querySelector(".main-body")
// let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    
    // m.style.marginTop="300px";
    // count++;
    // if(count%2==0){
    //     // m.style.marginTop="0px";

    // }
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});



    