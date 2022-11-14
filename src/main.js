
import data from './data/pokemon/pokemon.js';
import { searchFilter, ordenAZPokemon, ordenZAPokemon } from './data.js';



// ---- Mostrar cartas de cada Poke ----
const infoPokemon = data.pokemon;
const cardInfo = document.getElementById("cont-card");
cardInfo.classList.add("cont-card")

infoPokemon.forEach((persona) => {
    cardInfo.innerHTML += cardTemplate(persona.img, persona.num, persona.name)
});

function cardTemplate(img, num, name,myBtn) {
    
    const pokemonHTML = `
  <div class="cont.card" id=${num}>
  <div class="card" id="card">
  <img class="img" src=${img} </img><div> 
  <p><class= "namepokemon">${name} </p>
  <p><class= "numpokemon">${num}</p><br>
  
  </div>
  </div>
  <button class="myBtn" id=${myBtn}>modal</button>
  </div>
  `;
  /*cont.card.addEventListener('click', () => {
    const show = verMas(pokem);
    show.classList.add('modal');
  });*/
    return pokemonHTML
}



// --- Botón regresar a Home

const home = document.getElementById("home");
home.addEventListener("click", () => {
    window.location.reload();
});

/*const modal = document.getElementById("myModal");
//const btn = document.getElementById("myBoton")
const span = document.getElementsByClassName("close")[0];



const btn = document.getElementById("myBoton");
btn.addEventListener("click", () => {
    verMas();
});*/


// --- Boton Scroll ---
const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
    add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}

// ---- Buscar por nombre
const search = document.getElementById("search");
search.addEventListener("keyup", () => {
    const text = search.value;
    let busca = searchFilter(infoPokemon, text)
    cardInfo.innerHTML = " "
    busca.forEach((nombre) => {

        cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
    });
})


//Ordenar de A a la Z
const ordenAZ = document.getElementById("A-Z");
//const ordenZa = document.getElementById("Z-A");
ordenAZ.addEventListener("click", () => {
    const orden1 = ordenAZ;
    let ordenada = ordenAZPokemon(infoPokemon, orden1)
    //console.log(ordenada);
    cardInfo.innerHTML = " "
    ordenada.forEach((nombre) => {
        cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
    });
})

//Ordenar de Z a la A
const ordenZA = document.getElementById("Z-A");
ordenZA.addEventListener("click", () => {
    const orden2 = ordenZA;
    let desordenada = ordenZAPokemon(infoPokemon, orden2)
    //console.log(ordenada);
    cardInfo.innerHTML = " "
    desordenada.forEach((nombre) => {
        cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
    });
})

let modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


infoPokemon.forEach((persona) => {
    modal.innerHTML += verMas(persona.img, persona.num, persona.name, persona.type)

function verMas(img, name, num, type){
   

    const detallepokemonHTML = `
  <div class="cont.card" id=${num}>
  <div class="card" id="card">
  <img class="img" src=${img} </img><div> 
  <p><class= "namepokemon">${name} </p>
  <p><class= "numpokemon">${num}</p><br>
  <p><class""pokemontipo">${type}</p><br>
  </div>
  </div>
  </div>
  `;

return detallepokemonHTML;
}
});

cardinfo.click = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



