// create variable to get post by id from local storage with data
let postId = localStorage.getItem('post')
console.log(postId)

axios.get(`/api/posts/${postId}`, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
.then(res => {
  console.log(res.data)
  // plot title and body of post onto page from data
  document.getElementById('title').innerHTML = `${res.data.title}`
  document.getElementById('body').innerHTML = `${res.data.body}`
  // add body of each review/comment of blog post
  let reviews = res.data.reviews
  reviews.forEach(review => {
    document.getElementById('comments').innerHTML += `
    ${review.body}
    <br>
    `
  })
})

// button to submit comment on post
document.getElementById('submitComment').addEventListener('click', event => {
  let newComment = {
    body: document.getElementById('commentBody').value,
    pid: postId
  }
  console.log(newComment)
  axios.post('/api/reviews', newComment, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => {
    console.log(res)
  })
})