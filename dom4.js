const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const liTemplate= document.querySelector("#liTemplate");

const arrayPaises = ["Peru","mexico","Colombia","Brazil"];


arrayPaises.forEach(pais =>{
    
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent = pais

    fragment.appendChild(clone);
});
lista.appendChild(fragment);


// const clone = liTemplate.content.cloneNode(true);

// clone.querySelector(".text-primary").textContent="Agregue con template";


// lista.appendChild(clone);