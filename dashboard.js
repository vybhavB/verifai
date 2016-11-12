var database = firebase.database();

var user = firebase.auth().currentUser;

/*if (user) {
  var append = "";
  //var name = user.displayName;
  name = "Ferrante";
  database.ref("/teachers/" + name).once('value', function(snapshot) {
    snapshot.forEach(function(child) {
      append += '<li class="collection-item"><div class="collapsible-header">';
      append += "<b>" + child.val().title + '</b></div><div class="students"><h5>Students</h5>';
      database.ref("/teachers/" + name + "/" + child.key() + "/students").once('value', function(snap) {
        snap.forEach(function (chil) {
          append += '<div class="chip">' + chil.val() + '</div>';
        });
      });
      append += '</div><div class="buttons"><a  onclick="getQR('+ name + ', ' + child.key() + ')" class="btn blue text-white">Add Students</a><a href="#" class="btn blue text-white">Take Attendance</a></div>';
      append += '<div class="requests"><h5>Class Requests</h5><table><tbody>';
      database.ref("/teachers/" + name + "/" + child.key() + "/requests").once('value', function(snap) {
        snap.forEach(function (chil) {
          append += '<tr><td class="fillh100">' + chil.val() + '<p class="inline"><a href="#" onclick="accept('+ name + ", " + child.key() + ", " + chil.val() +')" class="btn accept red"> accept</a><a href="#" onclick="reject('+ name + ", " + child.key() + ", " + chil.val() +')" class="btn deny green"> deny</a></p></td></tr>';
        });
      });
      append += '</tbody></table></div></div></li>';
    });
  });
  $("#class-info").append(append);
//}
//else {
  //window.location = "teacherlogin.html";
//}*/

function accept(teacher, classname, name) {
  database.ref("/teacher/" + teacher + "/" + classname + "/students").push(name);
  database.ref("/teacher/" + teacher + "/" + classname + "/requests").remove(name);
}

function reject(teacher, classname, name) {
  database.ref("/teacher/" + teacher + "/" + classname + "/requests/" + name).remove();
}

function getQR(teacher, classname) {
  localStorage.setItem("qr", "/teacher/" + teacher + "/" + classname + "/requests");
  window.location = "scan.html";
}

$(document).ready(function () {
  var append = "";
  //var name = user.displayName;
  name = "Ferrante";
  database.ref("/teachers/" + name).once('value', function(snapshot) {
    snapshot.forEach(function(child) {
      var append = '<li class="collection-item"><div class="collapsible-header">';
      append += "<b>" + child.val().title + '</b></div><div class="students"><h5>Students</h5>';
      $("#class-info").append(append);
      database.ref("/teachers/" + name + "/" + child.val().title + "/students").once('value', function(snap) {
        snap.forEach(function (chil) {
          var append = '<div class="chip">' + chil.val() + '</div>';
          $("#class-info").append(append);
        });
      });
      var append = '</div><div class="buttons"><a  onclick="getQR(\''+ name + '\', \'' + child.val().title + '\')" class="btn blue text-white">Add Students</a><a href="#" class="btn blue text-white">Take Attendance</a></div>';
      append += '<div class="requests"><h5>Class Requests</h5><table><tbody>';
      $("#class-info").append(append);
      database.ref("/teachers/" + name + "/" + child.val().title + "/requests").once('value', function(snap) {
        snap.forEach(function (chil) {
          var append = '<tr><td class="fillh100">' + chil.val() + '<p class="inline"><a href="#" onclick="accept(\''+ name + '\', \'' + child.val().title + "\', \'" + chil.val() +'\')" class="btn accept red"> accept</a><a href="#" onclick="reject(\''+ name + '\', \'' + child.val().title + '\',  \'' + chil.val()
          + '\')" class="btn deny green"> deny</a></p></td></tr>';
          $("#class-info").append(append);
        });
      });
      var append = '</tbody></table></div></div></li>';
      $("#class-info").append(append);
    });
  });
  //$("#class-info").append(append);
  console.log(append);
  $('.collapsible').collapsible();
  $('#add').click(function() {
    database.ref("/teachers/" + user.displayName + "/" + $("#newclass").val()).set({title:  $("#newclass").val()});
  });
  $('#logout').click(logout());
});

function logout() {
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(function (user) {
      if(user){
      } else {
        //window.location = "loginProfessor.html";
      }
    });
  }
