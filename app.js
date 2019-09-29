const search = document.getElementById("searchbutton");
const sprite = document.getElementById("pokemon");
const type = document.getElementById("type");
search.addEventListener('click', function(event){
  event.preventDefault();
  findPokemon();
});

function getPokemonInfo(pokemon){
  sprite.src = pokemon.sprites.front_default;
  console.log(pokemon.types[0].type.name);
  let typeList = [];
  for (var i = 0; i < pokemon.types.length; i++) {
    typeList[i] = pokemon.types[i].type.name;
  }
  type.innerHTML = typeList;
}
function findPokemon(){

  const query = document.getElementById("searchbox").value;
  fetch('https://pokeapi.co/api/v2/pokemon/' + query)
    .then(function(response){
      let newData = response.json()
      return newData
    })
    .then(function(myJson){
      const data = JSON.stringify(myJson);
      const newData = JSON.parse(data);

      console.log(newData);
      getPokemonInfo(newData);

    });
}
