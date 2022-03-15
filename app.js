const gato={
    nombre:"bakakys",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"],
    get nombreMayuscula(){
        return this.nombre.toUpperCase()
    },
    set agregarEnmigo(nuevoAmigo){
        this.enemigos.push(nuevoAmigo)
    }
};
//GET
console.log(gato.nombreMayuscula);

//SET
gato.agregarEnmigo ="Batman";
console.log(gato)
