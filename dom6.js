const frutas =["banana","fresa","manzana"];

const copiaArray =frutas.map((fruta)=>fruta);

//frutas.push("Sandia");

//console.log(frutas);

const users=[

    {uid: 1,name: "walter",age: 34} ,
    {uid: 2,name: "Yulian ",age: 17},
    {uid: 3,name: "Jose",age: 32},
];

const amy=users.find((user)=> user.uid=== 2);
console.log(amy);

//buscar si hay un elemento devuelve true
const existe =users.some((user)=> user.uid ===4);
console.log(existe);
//buscar por indice si no lo encuentra devulve -1
const indice =users.findIndex((user)=> user.uid===5);
console.log(users[indice]);
 
//const userFiltrado=users.filter((user)=>user.uid !==3);
//console.log(userFiltrado);
//const names = users.map((user)=>user.name);

//const mayores =users.filter((user)=> user.age>30);
//console.log(mayores);


const numeros =[1,2,3,4,5,6];
const letas =["a","b","c","d"];

//une dos o mas arrays 
const arr3= numeros.concat(letas);
console.log("metodo concat: "+arr3);

//Sprit operator
const arra3=[...numeros, "--",...letas]
console.log(arra3)

// suma todos los elementos   recibe acomulador y valor actual
const sumartodos =numeros.reduce((acc,vrActual)=> acc+vrActual);
console.log("Metodo Reduce: "+sumartodos);


const nums2 =numeros.map((nume)=>nume*2);
console.log(nums2);

const arranew =numeros.slice(1, 3);
console.log(arranew);


