// functionality for login button
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
  // user inputs login information and is logged in
  axios.post('/api/users/login', newUser)
    .then(res => {
      console.log(res.data)
      let token = res.data
      // inside local storage we have a key and value of token
      localStorage.setItem('token', token)
      // after logging in, send user to homepage
      window.location = 'index.html'
    })

})

// // logout button
// document.getElementById('logout').addEventListener('click', event => {
//   localStorage.removeItem('token')
//   window.location = 'login.html'
// })