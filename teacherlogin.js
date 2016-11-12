function handleAuthChanges(){                                                                                                                                                 

  firebase.auth().onAuthStateChanged(function(user){

    if(user){
      window.location = "dashboard.html";
    }

  });

}

window.onload = function() {
      
  document.getElementById('signInButton').addEventListener('click', signIn);
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

            //}

        }
  }



/*
var SIGNUP_BUTTON = document.getElementById('signUpButton');
  var LOGIN_BUTTON = document.getElementById('loginButton');

  SIGNUP_BUTTON.onCLick=function(){
    console.log("hi");
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

              console.log("Error: " + errorCode + " message: " + errorMessage);
              Materialize.toast("An error has occurred.",2000);

        });
        }

  }

  LOGIN_BUTTON.onClick=function(){
    console.log("WORKS");
    handleAuthChanges();
    if(firebase.auth().currentUser){
      firebase.auth().signOut();
    }else{

      var TEACHER_EMAIL = document.getElementById('teacher-user').value,
          TEACHER_PASSWORD = document.getElementById('teacher-pass').value;
          localStorage.setItem("teacher-email", TEACHER_EMAIL);

            firebase.auth().signInWithEmailAndPassword(TEACHER_EMAIL, TEACHER_PASSWORD).catch(function(error) {

              var errorCode = error.code;
              var errorMessage = error.message;

              console.log("Error: " + errorCode + " message: " + errorMessage);
              Materialize.toast("An error has occurred.",2000);

              // var errorCode = error.code;
              // var errorMessage = error.message;
              // if(errorCode == 'auth/invalid-email') {
              //   Materialize.toast('The email is invalid.',2000);
              // } else if(errorCode == 'auth/user-disabled') {
              //   Materialize.toast('The user account has been disabled.',2000);
              // } else if(errorCode == 'auth/user-not-found') {
              //   Materialize.toast('The user cannot be found.',2000);
              // } else if(errorCode == 'auth/wrong-password') {
              //   Materialize.toast('The password is wrong.',2000);
              // } else {
              //   Materialize.toast('An Error has occured.',2000);
              // }
              // console.error(errorMessage);
            });
          }
          }
          */