function buscar(){

    let api = 'https://pokeapi.co/api/v2/pokemon/';
    let generacion = document.getElementById("inline_field").value;
    let contenidoCards = document.getElementById('pokemones');

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
    
    const fetchData = (api)=>{
        fetch(api)
            .then(response => response.json())
            .then(data =>{
                const datos = {
                    name: data.name,
                    id: data.id,
                    sprites: data.sprites.front_default,
                }

                const card = document.createElement('article');
                card.classList.add('nes-container')
                card.classList.add('con-poke')
        
                card.innerHTML = `
                <p>${datos.id}</p>
                <div class="card-image">
                <img class="img-fluid" src="${datos.sprites}" alt="imagen de ${datos.name}">
                <span class="badge-top">${datos.name}</span>
                </div>
                <div class="card-body">
                </div>
                `;
                
                contenidoCards.appendChild(card);
                return true
            } )
            .catch(error => console.log(error));
    }

    const anotherFunction = async (api) => {
        try {
            const data = await fetchData(api);
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    let mapeo = [];

    for( let i = inicio; i<= pokemones; i++){
        mapeo.push(i);
    }

    mapeo.map(function(x){
        anotherFunction(api+x);
     });


}