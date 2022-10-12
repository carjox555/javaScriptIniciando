//Capturamos carrito donde almacena
const carrito= document.getElementById('carrito');
const template= document.getElementById('template');
const fragment= document.createDocumentFragment();
const btnes= document.querySelectorAll('.card .btn');

//Almacenamos el producto  tipo objeto

const carritoObjeto = {
    //Se empuja la informacion

};
//Funcion de agregar al carrito
const agregarAlCarrito  =(e)=>{
    console.log(e.target.dataset.fruta);

    const producto={
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1
    }

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad=carritoObjeto[producto.titulo].cantidad+1;
    }
    carritoObjeto[producto.titulo]=producto
    pintarCarrito();

    //console.log(carritoObjeto)

};
const pintarCarrito=(producto)=>{
    carrito.textContent="";

    Object.values(carritoObjeto).forEach(item=>{
    const clone =template.content.firstElementChild.cloneNode(true);
    clone.querySelector('.lead').textContent=item.titulo;
    clone.querySelector('.badge').textContent=item.cantidad;
    clone.querySelector('div .lead span').textContent=item.precio;

    fragment.appendChild(clone);
})
carrito.appendChild(fragment);
};
//recorremos los botones
btnes.forEach((btn)=> btn.addEventListener("click",agregarAlCarrito));