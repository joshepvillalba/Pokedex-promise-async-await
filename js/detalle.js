function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable) {
        return pair[1];
    }
}
    return false;
}

async function buscarPokemones(id){
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

function datosPokemon(){
    const pk = getQueryVariable('pk');
    const card = document.createElement('article');
    card.classList.add('nes-container');
    card.classList.add('con-poke');
    const pokemon = buscarPokemones(pk);
    pokemon.then(data => data.json())
            .then(res => {
                const div = document.getElementById('main');
                const title = document.createElement('p');
                title.classList.add('title');
                title.innerText= res.name.toUpperCase();
                div.appendChild(title);
                const card = document.createElement('article');            
                card.innerHTML = `
                    <p>${res.id}</p>
                    <div class="card-image">
                    <img class="img-fluid" src="${res.sprites.front_default}" alt="imagen de ${res.name}">
                    <img class="img-fluid" src="${res.sprites.back_default}" alt="imagen de ${res.name}">
                    <img class="img-fluid" src="${res.sprites.front_shiny}" alt="imagen de ${res.name}">
                    <img class="img-fluid" src="${res.sprites.back_shiny}" alt="imagen de ${res.name}">
                    </div>
                    <div class="card-body">
                    </div>
                    `;    
                    (async()=> await fetch(res.species.url)
                        .then(resp => resp.json())
                        .then(resp => {
                            const descripcion = document.createElement('p');
                            
                            div.appendChild(card);

                            let datos = resp.flavor_text_entries.filter(datos => datos.language.name =='es'
                            )
                            console.log(datos);
                            for (i of datos){
                                console.log(i)
                                descripcion.innerHTML = `<div><p class='info'>${i.flavor_text}</p></div>`;   
                            }
                                                     
                            div.appendChild(descripcion)                      
                        }))()

;
            });
    
}

datosPokemon();








