// const li = document.createElement("li");

// const arrayPaises=["peru","bolivia","colombia"]
// const fragment = document.createDocumentFragment();
// arrayPaises.forEach((pais)=>{
//     const newNode = document.createElement("li");
//     newNode.textContent=pais;
//     const referenceNode = fragment.firstChild;
//     fragment.insertBefore(newNode, referenceNode)
// });

// lista.appendChild(fragment);

const lista = document.querySelector("#lista");

const arrayPaises = ["peru", "bolivia", "colombia"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach(pais => {

    const li = document.createElement('li')
    li.className = 'list'

    const b = document.createElement('b')
    b.textContent = "pais: "

    const span = document.createElement('span')
    span.className = "text-primary"
    span.textContent = pais;

    li.appendChild(b)
    li.appendChild(span)

    fragment.appendChild(li)
})

lista.appendChild(fragment);
