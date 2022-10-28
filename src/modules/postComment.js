const submitForm = async (username, comment) => {
  const uniqueID = 'dfZcl4Ir8rwlXsCGWsj9';
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${uniqueID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      comment: comment.value
    }),
  });
  if (response.ok) {
    return response;
  }
  return 'empty';
};

export default submitForm;