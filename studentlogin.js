$(window).ready(function() {
  var STUDENT_EMAIL = document.getElementById('student-user').value;
  var STUDENT_PASSWORD = document.getElementById('student-pass').value;

  firebase.auth().createUserWithEmailAndPassword(STUDENT_EMAIL, STUDENT_PASSWORD).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode == 'auth/email-already-in-use') {
      alert('The email is already in use.');
    } else if(errorCode == 'auth/invalid-email') {
      alert('The email is invalid.');
    } else if(errorCode == 'auth/operation-not-allowed') {
      alert('The operation is not allowed.');
    } else if(errorCode == 'auth/weak-password') {
      alert('The password is weak.');
    } else {
      alert('An Error has occured.');
    }
    console.error(errorMessage);
  }

  firebase.auth().signInWithEmailAndPassword(STUDENT_EMAIL, STUDENT_PASSWORD).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode == 'auth/invalid-email') {
      alert('The email is invalid.');
    } else if(errorCode == 'auth/user-disabled') {
      alert('The user account has been disabled.');
    } else if(errorCode == 'auth/user-not-found') {
      alert('The user cannot be found.');
    } else if(errorCode == 'auth/wrong-password') {
      alert('The password is wrong.');
    } else {
      alert('An Error has occured.');
    }
    console.error(errorMessage);
  }
});
