// get submitted posts by specific user
axios.get('api/users/profile', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
  .then(res => {
    console.log(res.data)
    let posts = res.data.posts

    posts.forEach(post => {
      document.getElementById('posts').innerHTML += `
    <h4 class="post" data-post="${post.id}" id="proTit"> ${post.title} </a>
    <h5> ${post.body} </h5>
    <button data-post="${post.id}" class="btn btn-primary me-md-2 edit" id="editBtn" type="button">Edit</button>
    <button data-post="${post.id}" class="btn btn-primary me-md-2 delete"  id="editBtn" type="button">Delete</button>
    <hr>
    `
    })
  })
// button to click on post title that will open new page with that post
document.addEventListener('click', event => {
  if (event.target.classList.contains('post')) {
    console.log(event.target.dataset.post)
    // set post id to local storage
    let postId = event.target.dataset.post
    localStorage.setItem('post', postId)
    window.location = 'post.html'
  }
  // delete post button
  if (event.target.classList.contains('delete')) {
    let postId = event.target.dataset.post
    axios.delete(`/api/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      console.log(res.data)
    })
  }
  // edit post button
  if (event.target.classList.contains('edit')) {
    let postId = event.target.dataset.post
    localStorage.setItem('editPost', postId)
    window.location = 'edit.html'
  }
})

// logout button
document.getElementById('logout').addEventListener('click', event => {
  localStorage.removeItem('token')
  window.location = 'login.html'
})