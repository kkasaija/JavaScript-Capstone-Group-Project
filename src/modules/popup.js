
const usedInPop = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const res = await response.json();
  return res;
};

const modalDisplay = async (id, popupInfo, commentList) => {
  const movies = await usedInPop(id);
  console.log(movies);
  movies.forEach((element) => {
    const modal = document.querySelector('.modal-wrapper');
    modal.style.display = 'flex';
    modal.innerHTML += `
    <div class="modal" id='${id}'>
      <div class='img-div'>
      <img class='img' src='${element.image.original}' alt="movie img">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div class='movie-title'>
      <h3>movie title</h3>
      <p>Other details</p>
    </div>
    <div class='comments-div'>
      <h3>comments</h3>
      <ul class='comment-list'></ul>
      <form class='form'>
        <input 
          type="text" 
          name="" 
          id="commenter" 
          placeholder="Your Name"
        >
        <textarea 
          name="" 
          id="comment" 
          cols="30" 
          rows="10" 
          placeholder="Leave a comment here!"
        ></textarea>
        <button type="submit" id='submit'>comment</button>
      </form>
    </div>
      </div>`;
    });
};
export default modalDisplay;
