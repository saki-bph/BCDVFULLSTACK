const search = document.getElementById("searchbutton");
const sprite = document.getElementById("sprite");
search.addEventListener('click', function(event){
  event.preventDefault();
  findPokemon();
});

function getPokemonSprite(picture){
  let newDiv = document.createElement("div");
  let pic = document.createElement("img");
  pic.src = picture;
  //pic.setAttribute("src",picture);
  newDiv.appendChild(pic);
  sprite.appendChild(newDiv);
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
      getPokemonSprite(newData.sprites.front_default);

    });
}
