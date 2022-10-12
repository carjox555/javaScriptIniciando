const frutas=[];

const fruta=prompt("👌Que fruta desea comprar")

frutas.push(fruta);

while(confirm("desea agregar otro")){
    const fruta =("Que fruta desea comptar")
    frutas.push(fruta);
}

console.log( "Compraste: ")
for(const fruta of frutas){
    console.log(fruta);
}