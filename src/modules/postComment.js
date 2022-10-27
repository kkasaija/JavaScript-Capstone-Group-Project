const username = document.querySelector('#commenter');
const comment = document.querySelector('#comment');

const submitForm = async () => {
  const info = {
    item_id,
    username: username.value,
    comment: comment.value,
  };

  const dataFormart = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  };

  const uniqueID = 'EqDeGxmunpJBGBpVzDss';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response =await fetch(`${baseUrl}${uniqueID}/comments`, dataFormart);
  const data = await response.json();
  username.value = '';
  comment.value = '';
  console.log(value);
  return data;
};

const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});
