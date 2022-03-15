
//los metodos llevan parentesis las propiedades no
const h1 =document.getElementById("h1Id");
const boton  =document.querySelector(".btn-primary");

boton.addEventListener("click", ()=> {
    console.log("diste click");
    h1.textContent = "Texto desde JS";
    h1.style.color="red";
    h1.style.accentColor="blue";
});

//document.addEventListener()