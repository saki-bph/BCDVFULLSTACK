const search = document.getElementById("searchbutton");
const sprite = document.getElementById("pokemon");
const type = document.getElementById("type");
const weakness = document.getElementById("weakness");
const card = document.getElementById("sprite");
search.addEventListener('click', function(event){
  event.preventDefault();
  card.style.visibility = "visible";
  findPokemon();
});
function findWeakness(pokemon){
    let mono = pokemon.types[0].type.name;
    fetch('https://pokeapi.co/api/v2/type/' + mono).then(function(response){
      let ddata = response.json();
      return ddata;
    })
    .then(function(ddata){
      const adata = JSON.stringify(ddata);
      const wdata = JSON.parse(adata);
      let weaklist = wdata.damage_relations.double_damage_from;
      getPokemonInfo(pokemon, weaklist);
    });
}

function getPokemonInfo(pokemon, weaklist){
  sprite.src = pokemon.sprites.front_default;
  let typeList = [];
  for (var i = 0; i < pokemon.types.length; i++) {
    typeList[i] = pokemon.types[i].type.name;
  }
  if(typeList.length < 2){
    typeList[1] = "";
  }
  type.innerHTML = typeList[0] + " " +typeList[1];
    weakness.innerHTML = weaklist[0].name;

}


function findPokemon(){

  const query = document.getElementById("searchbox").value.toLowerCase();
  fetch('https://pokeapi.co/api/v2/pokemon/' + query)
    .then(function(response){
      let newData = response.json()
      return newData
    })
    .then(function(myJson){
      const data = JSON.stringify(myJson);
      const newData = JSON.parse(data);
      findWeakness(newData);

    });
}
