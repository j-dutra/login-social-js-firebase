let provider = new firebase.auth.GoogleAuthProvider();
let loginButton = document.getElementById('google-login');



loginButton.addEventListener('click', () => {
  console.log('Foi clicado!!!!!')
})



/*
loginButton.addEventListener('click', () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {

    var user = result.user;
    console.log(user);

  }).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);

  });
});
*/