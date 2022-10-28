const submitForm = async (user, com, id) => {
  const uniqueID = 'dfZcl4Ir8rwlXsCGWsj9';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${uniqueID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: com,
    }),
  });
  if (response.ok) {
    return response;
  }
  return 'empty';
};

export default submitForm;