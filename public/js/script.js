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
    <h4 class="post" data-post="${post.id}"> ${post.title} </a>
    <h6> By ${post.User.username} </h6>
    <h5> ${post.body} </h5>
    <hr>
    `
  })
})
// button to click on post title that will open new page with that post
document.addEventListener('click', event => {
  if(event.target.classList.contains('post')) {
    console.log(event.target.dataset.post)
    // set post id to local storage
    let postId = event.target.dataset.post
    localStorage.setItem('post', postId)
    window.location = 'post.html'
  }
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