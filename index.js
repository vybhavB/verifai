var config = {
    apiKey: "AIzaSyD9QoCxhv_Nuzkt32ZZSurGfEKvdPvX3-s",
    authDomain: "verifi-55b09.firebaseapp.com",
    databaseURL: "https://verifi-55b09.firebaseio.com",
    storageBucket: "verifi-55b09.appspot.com",
    messagingSenderId: "969001895612"
  };

$(window).ready(function() {
  $(".button-collapse").sideNav();
  firebase.initializeApp(config);
});
