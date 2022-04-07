// functionality for register button
document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  // console log username and password to check if input field works
  // console.log(document.getElementById('username').value)
  // console.log(document.getElementById('password').value)
  let newUser = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  }
  console.log(newUser)
  // post new user to database
  axios.post('/api/users/register', newUser)
  .then(res => {
    console.log(res)
    // after registering, send user to login page to login once more
    window.location = 'login.html'
  })
  
})