import { homePageGetObj } from './loadHomePage.js';
import { getComments } from './getComment.js';
import submitForm from './postComment.js';

const commentCount = (count) => count.length

const modalDisplay = async (id) => {
  console.log('id ',id)
  const movies = await homePageGetObj();
  const showComments = await getComments(id);
  movies.forEach((element) => {
    const modal = document.querySelector('.modal-wrapper');
    modal.style.display = 'flex';
    document.querySelector('.page').style.filter = 'blur(100px)';
    document.querySelector('.element-counter').style.filter = 'blur(100px)';
    
    if (id.toString() == element.id.toString()) {
      modal.innerHTML = `
      <div class='modal' id='${id}'>
        <div class='img-div'>
        <img class='img' src='${element.image.original}' alt=''>
        <i class="fa-solid fa-xmark"></i>
        </div>

        <div class='movie-title'>
        <h3>movie title</h3>
        <p>Other details</p>
        </div>

        <div class='comments-div'>
          <h3>comments: (${commentCount(showComments)})</h3>
          
          <form class='form'>
            <input type='text' id='commenter' placeholder='Your Name'>
            <textarea id='comment' cols='30' rows='10' placeholder='Leave a comment here!'></textarea>
            <button type='submit' id='submit'>comment</button>
          </form>
        </div>
        <ul class='comment-list'></ul>
      </div>`;
    };
  });
  const displayComments = showComments.forEach((i) => {
    const commentList = document.querySelector('.comment-list');
    commentList.innerHTML += `<li class='listCom'> Name: ${i.username} <br> Comment: ${i.comment} <br> Date: ${i.creation_date} </li>`;
  });
  displayComments;

  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('commenter').value;
    const comment = document.getElementById('comment').value;
    submitForm(username, comment, id);
    const commentList = document.querySelector('.comment-list');
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    commentList.innerHTML += `<li class='listCom'> Name: ${username} <br> Comment: ${comment} <br> Date: ${year}-${month}-${day} </li>`;
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
  });
};

export { modalDisplay };
