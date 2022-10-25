const homePageGetObj = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const res = await response.json();
  return res;
};
  const displayList = async () => {
    const getPokemon = await homePageGetObj();
    console.log('look here ',getPokemon);
    const page = document.querySelector('.page');
    let disp = '';
    getPokemon.forEach((item) => {
    disp += `
    <div>
      <img class='pageImg' src= ${item.url} alt='page image pokemon' />
      <p class='pageName'> ${item.name} </p>
      <div class='likeContainer'> 
        likes <i class="fa-regular fa-heart"></i>
      </div>
      <button type='' class='commentBtn'> comment </button>
    </div>
    `
    page.innerHTML = disp;
    });
  };

  window.onload = displayList();

module.exports = { homePageGetObj };