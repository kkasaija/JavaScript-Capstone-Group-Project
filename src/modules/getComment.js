
export const getComments = async (id) => {
  const uniqueID = 'EqDeGxmunpJBGBpVzDss';
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
