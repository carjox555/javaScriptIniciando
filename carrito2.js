//Capturamos carrito donde almacena
const carrito= document.getElementById("carrito");
//pintamos en el template donde va el footer
const template= document.getElementById("template");
const footer=document.getElementById("footer");
const templateFooter=document.getElementById("templateFooter")
const fragment= document.createDocumentFragment();
const btnes= document.querySelector('.card .btn');

//delegamos eventos
document.addEventListener('click',(e)=>{
//pinta true al tocar botenes  false a otra parte Matches para capturar botones
//console.log(e.target.matches(".card .btn-outline-primary"));
if(e.target.matches(".card .btn-outline-primary")){
    //console.log("Agrega al Carro");
    agregarAlCarrito(e);
    
}
    //console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e);
    };
});
const carritoObjeto=[];

const agregarAlCarrito =(e)=>{
    //console.log(e.target.dataset.fruta);
    //captura de datos 
    const producto={
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1,
        precio: parseInt(e.target.dataset.precio),
    };
    const indice=carritoObjeto.findIndex((item)=> item.id === producto.id);

    if (indice=== -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[indice].cantidad++;
        //carritoObjeto[indice].precio=carritoObjeto[indice].cantidad*producto.precio;
    }
    console.log(carritoObjeto);
    pintarCarrito();
};   
    const pintarCarrito=()=>{
        carrito.textContent=""; //limpiar carrito para que los objetos no cojan para abajo
        //recoremos el array carritoObjeto
        carritoObjeto.forEach((item)=>{
            const clone=template.content.cloneNode(true);
            clone.querySelector(".text-white .lead").textContent=item.titulo;
            clone.querySelector(".badge").textContent=item.cantidad;
            clone.querySelector("div .lead span").textContent=item.precio*item.cantidad;

            clone.querySelector(".btn-danger").dataset.id =item.id;
            clone.querySelector(".btn-success").dataset.id =item.id;

            fragment.appendChild(clone);

        });
        
        carrito.appendChild(fragment);
    };

    const btnAumentar=(e)=>{
        console.log("diste clck", e.target.dataset.id);
        carritoObjeto = carritoObjeto.map((item)=>{
            if(item.id === e.target.dataset.id){
                item.cantidad ++;
            }
            return item;                                                                                                                                                                                                                                                                                                                                        item;
        });
        pintarCarrito();
    };

    // if(carritoObjeto.hasOwnProperty(producto.titulo)){
    //     producto.cantidad=carritoObjeto[producto.titulo].cantidad+1;
    // }
    // carritoObjeto[producto.titulo]=producto
    // pintarCarrito();

    //console.log(carritoObjeto)

