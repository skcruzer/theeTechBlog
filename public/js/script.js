// get submitted posts
axios.get('api/posts', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
.then(res => {
  console.log(res.data)
  let posts = res.data
  posts.forEach(post => {
    document.getElementById('posts').innerHTML += `
    <h4> ${post.title} </h4>
    <h6> By ${post.User.username} </h6>
    <h5> ${post.body} </h5>
    <hr>
    `
  })
})

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