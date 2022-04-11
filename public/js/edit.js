// variable to grab edit post from local storage
let editPost = localStorage.getItem('editPost')

// button to submit edited post
document.getElementById('submitPost').addEventListener('click', event => {
  let editedPost = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  console.log(editedPost)
  axios.put(`api/posts/${editPost}`, editedPost, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => {
    console.log(res.data)
    window.location = 'profile.html'
  })
})

// logout button
document.getElementById('logout').addEventListener('click', event => {
  localStorage.removeItem('token')
  window.location = 'login.html'
})