const getLikes = async () => {
  const uniqueID = 'koWShQRS6nOY80YNyou5';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${uniqueID}/likes/`);
  const res = await response.json();
  if (response.ok) {
    return res;
  }
  return 'empty';
};

const postLikes = async (id) => {
  const uniqueID = 'koWShQRS6nOY80YNyou5';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${uniqueID}/likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  if (response.ok) {
    return response;
  }
  return 'empty';
};

export { postLikes, getLikes };
