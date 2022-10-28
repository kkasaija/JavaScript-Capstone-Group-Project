/* eslint-disable import/no-cycle */
import { postLikes, getLikes } from './LikeButton.js';
import modalDisplay from './popup.js';
import movieCount from './homeCounter.js';

const homePageGetObj = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const res = await response.json();
  return res.slice(0, 10);
};

const displayList = async () => {
  const page = document.querySelector('.page');
  const movies = await homePageGetObj();
  const showLikes = await getLikes();

  const elCount = document.querySelector('.element-counter');
  elCount.append(movieCount(movies));

  const movie = movies.map((movieDetail) => {
    const defaultResult = { movieDetail, item_id: movieDetail.id, likes: 0 };
    if (!showLikes) {
      return defaultResult;
    }
    const like = showLikes.find((like) => movieDetail.id.toString() === like.item_id);
    return { ...defaultResult, ...like };
  });

  movie.forEach((item) => {
    page.innerHTML
    += `
    <div class='page-info'>
        <img class='page-img' src= ${item.movieDetail.image.original} alt='${item.movieDetail.name}' />
        <p class='page-name'> ${item.movieDetail.name} </p>
        <div class='like-container'> 
          <label class='like-label'>Total likes: </label>
          <span class='span-like' id='like-${item.item_id}'>${item.likes}</span>
            <i class="fa-regular fa-heart" id=${item.movieDetail.id}></i>
        </div>
        <button id='${item.movieDetail.id}' class='comment-btn'> comment </button>
      </div>
    `;
  });

  const likeBtnAll = [...document.querySelectorAll('.fa-heart')];
  likeBtnAll.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const likeDetail = document.getElementById(`like-${e.target.id}`);
      postLikes(e.target.id);
      likeDetail.innerHTML = Number(likeDetail.innerText) + 1;
    });
  });

  const commentBtnAll = [...document.querySelectorAll('.comment-btn')];
  commentBtnAll.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      modalDisplay(e.target.id);
    });
  });
};

export { displayList, homePageGetObj };
