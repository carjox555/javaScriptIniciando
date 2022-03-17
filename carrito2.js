//Capturamos carrito donde almacena
const carrito= document.getElementById('carrito');
const template= document.getElementById('template');
const fragment= document.createDocumentFragment();
const btnes= document.querySelectorAll('.card .btn');

//Almacenamos el producto  tipo objeto

const carritoObjeto = []
    //Se empuja la informacion

;
//Funcion de agregar al carrito
const agregarAlCarrito  =(e)=>{
    console.log(e.target.dataset.fruta);
    //Este es el objeto
    const producto={
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1
    };

    const indice=carritoObjeto.findIndex(
        (item)=> item.id===producto.id);
    
    if(indice === -1){
        carritoObjeto.push(producto);
    } else{
        carritoObjeto[indice].cantidad ++;
    }

    console.log(carritoObjeto);
    pintarCarrito(carritoObjeto);

};
const pintarCarrito=(array)=>{
    carrito.textContent="";

    array.forEach(item=>{
    const clone =template.content.firstElementChild.cloneNode(true);
    clone.querySelector('.lead').textContent=item.titulo;
    clone.querySelector('.badge').textContent=item.cantidad;

    fragment.appendChild(clone);
})
carrito.appendChild(fragment);
};
//recorremos los botones
btnes.forEach((btn)=> btn.addEventListener("click",agregarAlCarrito));