function buscar(){

    let generacion = document.getElementById("inline_field").value;
    let contenidoCards = document.getElementById('pokemones');
    let cargar = document.getElementById("cargando");
    let valorCarga = document.getElementById("barraCargando");
    
    
    cargar.style.cssText = "display:block;";

    contenidoCards.innerHTML = "";

    let pokemones;
    let inicio;

        switch (generacion) {
            case 1:
                inicio = "1";
                pokemones = 151;
                break;
            case "2":
                inicio = 152;
                pokemones = 251;
                break;

            case "3":
                inicio = 252;
                pokemones = 386;
                break;

            case "4":
                inicio = 387;
                pokemones = 493;
                break;
            
            case "5":
                inicio = 494;
                pokemones = 649;
                break;
            case "6":
                inicio = 650;
                pokemones = 721;
                break;

            case "7":
                incio = 722;
                pokemones = 809;
                break;

            case "8":
                inicio = 810;
                pokemones = 890;
                break;

            default:
                inicio = 1;
                pokemones = 151;
                break;
        }

    let mapeo = [];

    for( let i = inicio; i<= pokemones; i++){
        mapeo.push(i);
    }

    const opts = { crossDomain: true };

    const API_URL = "https://pokeapi.co/api/v2/";
    const POKEMON_URL = "pokemon/:id"

    function obtenerPersonaje(id){
    //
        return new Promise((resolve,reject) => {
            const url = `${API_URL}${POKEMON_URL.replace(':id',id)}`;
            $.get(url,function(data){
                resolve(data);
            }).fail(function(){
                reject(id)
            })
        })
    }

    function onError(id){
        console.log(`Sucedio un error al tratar de buscar a ${id}`);
    }

    var promesas = mapeo.map(id => obtenerPersonaje(id))

    Promise.all(promesas)
    .then(personajes => {personajes.forEach(personaje => dibujar(personaje))
        valorCarga.value=100;
        contenidoCards.style.cssText = "display:flex;";
        setTimeout(() => {
            cargar.style.cssText = "display:none;"
            },1000)
})
    .catch(onError)

    function dibujar(datos){
        const card = document.createElement('article');
        card.classList.add('nes-container')
        card.classList.add('con-poke')

        card.innerHTML = `
        <p>${datos.id}</p>
        <div class="card-image">
        <img class="img-fluid" src="${datos.sprites.front_default}" alt="imagen de ${datos.name}">
        <span class="badge-top">${datos.name}</span>
        </div>
        <div class="card-body">
        </div>
        `;
        
        contenidoCards.appendChild(card);
        return true
    }

}