var database = firebase.database();

var user = firebase.auth().currentUser;
  var append = "";
  var name = user.displayName;
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

  // window.location = "teacherlogin.html";

function accept(teacher, classname, name) {
  database.ref("/teacher/" + teacher + "/" + classname + "/students").push(name);
  database.ref("/teacher/" + teacher + "/" + classname + "/requests").remove(name);
}

function reject(teacher, classname, name) {
  database.ref("/teacher/" + teacher + "/" + classname + "/requests").remove(name);
}

function getQR(teacher, classname) {
  localStorage.setItem("qr", "/teacher/" + teacher + "/" + classname + "/requests");
  window.location = "scan.html";
}

$(document).ready(function () {
  $('.collapsible').collapsible();
  $('#add').click(function() {
    database.ref("/teachers/" + user.displayName + "/").push({title:  $("#newclass").val()});
  });
});

function logout() {
    firebase.auth().signOut().then(function() {
      window.location("index.html");
    }, function(error) {
      Materialize.toast("An error has occured");
      console.log(error);
    });
    
  }
