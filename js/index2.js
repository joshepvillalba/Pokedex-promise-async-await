function buscar(){

    let generacion = document.getElementById("inline_field").value;
    const api = 'http://pokeapi.co/api/v2/pokemon/';

    let cardsContent = document.getElementById('pokemones');
    let pokemones;

    switch (generacion) {
        case "1":
            pokemones = 151;
            break;
        case "2":
            pokemones = 151;
            break;

        case "3":
            pokemones = 151;
            break;

        case "4":
            pokemones = 151;
            break;
        
        case "5":
            pokemones = 151;
            break;
        case "6":
            pokemones = 151;
            break;

        case "7":
            pokemones = 151;
            break;

        case "8":
            pokemones = 151;
            break;

        default:
            pokemones = 151;
            break;
      }

      console.log(inicio)
      console.log(pokemones)

      function getData(personaje){
        return fetch(api+personaje)
        .then(response => response.json())
        .then(json => json)
        }
        async function anotherFunction(){
          try{
            const data = await getData()
            const character = await data.results[0]
            const origin = await fetch(character.origin.url)
                .then(response => response.json())
                .then(json => json)
                console.log(data.info.count)
                console.log(character.name)
                console.log(origin.dimension)
        }catch(error){
        console.error(error)}
        }  

        getData(1);

    const cardGenerator = object => {
        const card = document.createElement('article');
        card.classList.add('nes-container')

        card.innerHTML = `
        <div class="card-image">
        <img class="img-fluid" src="${object.sprites}" alt="imagen de ${object.name}">
        <span class="badge-top">${object.origin.name}</span>
        </div>
        <div class="card-body">
        <h3>${object.name}</h3>
        <p>${object.types}</p>
        <span class="${object.status.toLowerCase()}">${object.status}</span>
        </div>
        `;

        return card;
    }

}