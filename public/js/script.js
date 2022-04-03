// submit post button
document.getElementById('submit').addEventListener('click', event => {
  let newPost = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  console.log(newPost)
  // verifies token of user to let user submit post
  axios.post('/api/posts', newPost, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => {
    console.log(res.data)
  })
})