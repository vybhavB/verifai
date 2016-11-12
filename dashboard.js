window.onLoad = function() {
  var LOGOUT_BUTTON = document.getElementById('logout');

  LOGOUT_BUTTON.onclick=functino() {
    firebase.auth().signOut().then(function() {
      console.log('The sign out was successful.');
    }, function(error) {
      console.log('An error occured.');
    });
  }
}
