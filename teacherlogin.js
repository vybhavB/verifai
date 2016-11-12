
function handleAuthChanges(){

  firebase.auth().onAuthStateChanged(function(user){

    if(user){
      firebase.database().ref("/teachers/" + firebase.auth().currentUser.displayName).push({type: "teacher"});
      window.location = "dashboard.html";
    }

  },function(error){
    Materialize.toast("An error has occurred.",2000);
        console.log("Error: " + errorCode + "| message: " + errorMessage);
  });

}

window.onload = function() {

  document.getElementById('signUpButton').addEventListener('click', signIn);
  document.getElementById('loginButton').addEventListener('click', login);

}

function signIn(){
    handleAuthChanges();
    if(firebase.auth().currentUser){
       firebase.auth().signOut();
    }else{
      var TEACHER_EMAIL = document.getElementById('teacher-user').value,
          TEACHER_PASSWORD = document.getElementById('teacher-pass').value;
      localStorage.setItem("teacher-email", TEACHER_EMAIL);

      firebase.auth().createUserWithEmailAndPassword(TEACHER_EMAIL, TEACHER_PASSWORD).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        Materialize.toast("An error has occurred.",2000);
        console.log("Error: " + errorCode + "| message: " + errorMessage);
        TEACHER_EMAIL = "";
        TEACHER_PASSWORD = "";
    });
  }
}
  function login(){
    handleAuthChanges();
    if(firebase.auth().currentUser){
      firebase.auth().signOut();
    }else {
      var email = document.getElementById("teacher-user"),
      password = document.getElementById("teacher-pass");
      localStorage.setItem("email", email.value);

      firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        Materialize.toast("Invalid email or password",2000);
        email.value = "";
        password.value = "";
      });
    }
  }