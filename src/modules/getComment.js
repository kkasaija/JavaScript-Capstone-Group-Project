const getComments = async (id) => {
  const uniqueID = 'dfZcl4Ir8rwlXsCGWsj9';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${uniqueID}/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();
  if (res) {
    return res;
  }
  return 'empty';
};

export default getComments;
