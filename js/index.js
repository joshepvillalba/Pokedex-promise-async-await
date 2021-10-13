let contenidoCards = document.getElementById('pokemones');
let cargar = document.getElementById("cargando");
let valorCarga = document.getElementById("barraCargando");

function dibujarPokemones(id,name,sprite){

    const card = document.createElement('article');
    card.classList.add('nes-container')
    card.classList.add('con-poke')

    card.innerHTML = `<a href="javascript:popUp('/detalle.html?pk=${id}')">
        <p>${id}</p>
        <div class="card-image">
        <img class="img-fluid" src="${sprite}" alt="imagen de ${name}">
        <span class="badge-top">${name}</span>
        </div>
        <div class="card-body">
        </div></a>
        `;    
        contenidoCards.appendChild(card);
}

async function getPokemon(api,ini,fin){
    for (let i = ini; i <= fin; i++){
        pokemon = await fetch(api+i);
        pokemonjson = await pokemon.json();
        dibujarPokemones(pokemonjson.id,pokemonjson.name,pokemonjson.sprites.front_default)
        valorCarga.value=i-ini;
    }
    cargar.style.cssText = "display:none;";
}

function buscar(){
    const API = 'https://pokeapi.co/api/v2/pokemon/';
    contenidoCards.innerHTML = "";
    cargar.style.cssText = "display:block;";
    let inicio = 1;
    let pokemones = 151;
    let generacion = document.getElementById("inline_field").value;
    console.log(generacion)
    switch (generacion) {
        case '1':
            inicio = "1";
            pokemones = 151;
            break;
        case '2':
            inicio = 152;
            pokemones = 251;
            break;

        case '3':
            inicio = 252;
            pokemones = 386;
            break;

        case '4':
            inicio = 387;
            pokemones = 493;
            break;
        
        case '5':
            inicio = 494;
            pokemones = 649;
            break;

        case '6':
            inicio = 650;
            pokemones = 721;
            break;

        case '7':
            inicio = 722;
            pokemones = 809;
            break;

        case '8':
            inicio = 810;
            pokemones = 898;
            break;

        default:
            inicio = 1;
            pokemones = 151;
            break;
    }
    console.log(inicio,pokemones)
    getPokemon(API,inicio,pokemones)
    contenidoCards.style.cssText = "display:flex;";
}