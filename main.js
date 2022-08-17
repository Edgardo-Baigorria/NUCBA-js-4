const cardContainer = document.querySelector(".containerPizza");
const form = document.querySelector('form');
const pizzaInput = document.querySelector('.search-input');
const pizzas = [
    { id: 1, name: "MUZZARELLA", ingredientes: ["salsa", "muzzarela", "oregano"], precio: 400 },
    { id: 2, name: "NAPOLITANA", ingredientes: ["salsa", "muzzarela", "tomate", "ajo"], precio: 800 },
    { id: 3, name: "MORRON", ingredientes: ["salsa", "muzzarela", "jamon", "morron"], precio: 500 },
    { id: 4, name: "FUGAZZETA", ingredientes: ["muzzarela", "cebolla", "aceite de oliva"], precio: 600 },
    { id: 5, name: "CALABRESA", ingredientes: ["salsa", "muzzarela", "longaniza"], precio: 650 },
    { id: 6, name: "ANANA", ingredientes: ["salsa", "muzzarela", "ananá"], precio: 700, },
]





const arrayPizza = (item) => {
    return JSON.parse(localStorage.getItem(item)) || [];
};


function saveLocalStorage(pizzasarray) {
    localStorage.setItem("zappi", JSON.stringify(pizzasarray));
}

const renderPizza = pizza => {
    const { id, name, precio, ingredientes } = pizza;
    return `
    <img class="pizzaIMG" src="img/${id}.jpg"/>
    <h2>${name}</h2>        
    <p class="ingredientes">${ingredientes}</p>
    <p class="price">$${precio}</p> 
    `;
};

const renderPizzas = (pitza) => {
    cardContainer.innerHTML = pitza.map(renderPizza).join('');
};


const searchPizza = (e) => {
    e.preventDefault();
    const pizzaValue = pizzaInput.value;
    if (pizzaValue === "") {
        return alert("No ingresaste nada");
    }
    let filtro = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(pizzaValue.toLowerCase())
    );



    // arrayPizza = [filtro, ...arrayPizza];  
    saveLocalStorage(filtro);
    renderPizzas(filtro);
    form.reset();
};


const init = () => {
    form.addEventListener("submit", searchPizza);
    renderPizzas(arrayPizza("zappi"))
}

init();
