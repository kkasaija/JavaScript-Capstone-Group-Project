export const getComments = async (id) => {
  const uniqueID = 'dfZcl4Ir8rwlXsCGWsj9';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${uniqueID}/comments?item_id=${id}`, {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const res = await response.json();
  if(res) {
    return res;
  }
  return 'empty';
};

// const modalDisplay = async (id) => {
//   const movies = await homePageGetObj();
//   const showComments = await getComments(id);
//   console.log(id, ' id')
//   // const popup = movies.map((movieDetail) => {
//   //   const defaultResult = { movieDetail, item_id: movieDetail.id, comments: 0, username: 'test', creation_date: '01/01/22' };
//   //   if (!showComments) {
//   //     return defaultResult;
//   //   }
//   //   const comment = showComments.find((comment) => movieDetail.id.toString() === comment.item_id);
  
//   //   return { ...defaultResult, ...comment };
//   // });

//   movies.forEach((element) => {
//     const modal = document.querySelector('.modal-wrapper');
//     modal.style.display = 'flex';
//     document.querySelector('.page').style.filter = 'blur(100px)';
//     document.querySelector('.element-counter').style.filter = 'blur(100px)';
//     modal.innerHTML = `
//     <div class='modal' id='${id}'>
//       <div class='img-div'>
//       <img class='img' src='${element.image.original}' alt=''>
//       <i class="fa-solid fa-xmark"></i>
//       </div>

//       <div class='movie-title'>
//       <h3>movie title</h3>
//       <p>Other details</p>
//       </div>

//       <div class='comments-div'>
//         <h3>comments: (${showComments.length || 0})</h3>
        
//         <form class='form'>
//           <input type='text' id='commenter' placeholder='Your Name'>
//           <textarea id='comment' cols='30' rows='10' placeholder='Leave a comment here!'></textarea>
//           <button type='submit' id='submit'>comment</button>
//         </form>
//       </div>
//       <ul class='comment-list'></ul>
//     </div>`;
//     });

//   // const displayComments = showComments.forEach((i) => {
//   //   const commentList = document.querySelector('.comment-list');
//   //   commentList.innerHTML = '';
//   //   commentList.innerHTML 
//   //   += `<li class='listCom'> ${i.username}: <br> ${i.comment} <br> :${i.creation_date} </li>`;
//   // });
//   // displayComments;

//   // const form = document.querySelector('.form');
//   // form.addEventListener('submit', (e) => {
//   //   e.preventDefault();
//   //   const username = document.getElementById('commenter');
//   //   const comment = document.getElementById('comment');
//   //   submitForm(username, comment, e.target.id);
//   // });
// };

// export { modalDisplay };
