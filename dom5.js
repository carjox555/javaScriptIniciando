
//capturo los elementos para agregar eventos

//ESTO NO ES OPTIMO
// const padre= document.querySelector('.border-primary');
// const hijo= document.querySelector('.border-secondary');
// const nieto= document.querySelector('.border-danger');

// padre.addEventListener('click',()=>{
//     console.log("Me diste click padre");
// },true);

// padre.addEventListener('click',()=>{
//     console.log("Me diste click hijo");
// },true);

// padre.addEventListener('click',()=>{
//     console.log("Me diste click nieto");
// },true);

//

const cajitas = document.querySelectorAll('.border');

cajitas.forEach((caja)=>{
    caja.addEventListener("click",(e)=> {
        e.stopPropagation();
        console.log("me diste clicksillo");
    })

});

const formulario= document.querySelector("form")
formulario.addEventListener("submit",(e)=>{
    console.log("clicksillo");
    e.preventDefault();
});