// functionality for register and login buttons
document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  let newUser = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  }
  console.log(newUser)
  // register button
  axios.post('/api/users/register', newUser)
  .then(res => {
    console.log(res)
    // after registering, send user to login page to login once more
    window.location = 'login.html'
  })
  // login button
  axios.post('/api/users/login', newUser)
  .then(res => {
    console.log(res.data)
    let token = res.data
    localStorage.setItem('token', token)
    // after logging in, send user to homepage
    window.location = 'index.html'
  })
})
