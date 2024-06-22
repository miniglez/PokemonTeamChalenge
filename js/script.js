const pokemonInfo = document.getElementById("pokemonInfo")
const button = document.getElementById("get-pokemon")
const select = document.getElementById("pokemon-select")

// nombre (name)ss, imagen(sprites[hay varios])ss, tipo(type[puede haber varios]), altura(height) y peso(weight)

const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
        if(!response.ok){
            throw new Error("Error 404")
        }
        else{
            return response.json()
        }
    })
    .then(data => {
            console.log(data)
            let template = `<div id="imagePokemon">
                                <img src=${data.sprites.front_default} alt=${data.name} />
                                <img src=${data.sprites.front_shiny} alt=${data.name} />
                            </div>
                            <h2><span>Name: </span>${data.name}</h2>
                            <p><span>Height: </span>${data.height}</p>
                            <p><span>Weight: </span>${data.weight}</p>
                            <p><span>Type/s: </span> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>`
            pokemonInfo.innerHTML = template;
            return data
        })
    .catch(() => {
        console.error("Error 404")
    })
}

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        data.results.forEach(pokemon => {
            select.innerHTML += `<option value=${pokemon.name}>${pokemon.name}</option>`
        })
    })

button.addEventListener("click", () => {
    if(select !== ""){
        getPokemon(select.value)
    }
})