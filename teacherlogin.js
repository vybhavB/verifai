$(window).ready(function() {
  var TEACHER_EMAIL = document.getElementById('teacher-user').value;
  var TEACHER_PASSWORD = document.getElementById('teacher-pass').value;
  var SIGNUP_BUTTON = document.getElementById('signUpButton');
  var LOGIN_BUTTON = document.getElementById('loginButton');

  SIGNUP_BUTTON.onclick =function() {
    firebase.auth().createUserWithEmailAndPassword(TEACHER_EMAIL, TEACHER_PASSWORD).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == 'auth/email-already-in-use') {
        Materialize.toast('The email is already in use.', 2000);
      } else if(errorCode == 'auth/invalid-email') {
        Materialize.toast('The email is invalid.',2000);
      } else if(errorCode == 'auth/operation-not-allowed') {
        Materialize.toast('The operation is not allowed.',2000);
      } else if(errorCode == 'auth/weak-password') {
        Materialize.toast('The password is weak.',2000);
      } else {
        Materialize.toast('An Error has occured.',2000);
      }
      console.error(errorMessage);
    });
  }

  LOGIN_BUTTON.onclick=function() {
    firebase.auth().signInWithEmailAndPassword(TEACHER_EMAIL, TEACHER_PASSWORD).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == 'auth/invalid-email') {
        Materialize.toast('The email is invalid.',2000);
      } else if(errorCode == 'auth/user-disabled') {
        Materialize.toast('The user account has been disabled.',2000);
      } else if(errorCode == 'auth/user-not-found') {
        Materialize.toast('The user cannot be found.',2000);
      } else if(errorCode == 'auth/wrong-password') {
        Materialize.toast('The password is wrong.',2000);
      } else {
        Materialize.toast('An Error has occured.',2000);
      }
      console.error(errorMessage);
    });
  }
});
