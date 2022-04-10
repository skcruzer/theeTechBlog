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
    <h4 class="post" data-post="${post.id}"> ${post.title} </a>
    <h5> ${post.body} </h5>
    <button class="btn btn-primary me-md-2 delete" type="button">Delete</button>
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
})