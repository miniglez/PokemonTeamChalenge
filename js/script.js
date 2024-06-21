


const pokemonInfo = document.getElementById("pokemonInfo")
const button = document.getElementById("get-pokemon")

// nombre (name)ss, imagen(sprites[hay varios])ss, tipo(type[puede haber varios]), altura(height) y peso(weight)

const getPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
        if(response != data.ok){
            throw new Error("Error 404")
        }
        else{
            return response.json()
        }
    })
    .then(data => {
            let template = `<img src=${data.sprites.front_default} alt=${data.name} image>
                            <h2><span>Nombre: </span>${data.name}
                            <p><span>Altura: </span>${data.height}<p>
                            <p><span>Peso: </span>${data.weight}
                            <p><span>Tipo/s: </span> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`
            pokemonInfo.innerHTML = template;
            return data
        })
    .catch(() => {
        console.error("Error 404")
    })
}


button.addEventListener("click", () => {
    const select = document.getElementById("pokemon-select").value
    if(select !== ""){
        let hola = getPokemon(select)
        console.log(hola)
    }
})