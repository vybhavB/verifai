window.onLoad = function() {
  function logout() {
    	firebase.auth().signOut();
    	firebase.auth().onAuthStateChanged(function (user) {
    	  if(user){
    	  } else {
    	    window.location = "loginProfessor.html";
    	  }
    	});
    }
  }

