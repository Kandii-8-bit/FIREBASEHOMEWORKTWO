//Working hard to try to figure out how to display all my album data
//This is my biggest hangup with firebase projects, how do I get the data and display it on HTML?
var _db;

function initFirebase() {
  _db = firebase.firestore();
}

function initListeners() {
  $(".getData").click(function (e) {
    // let al = $("#albums").val();
    // let alObj = {};
    _db
      .collection("Albums")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
  });
  //I need this to just display on the page please...
}

$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    initListeners();
  } catch {
    console.error(e);
  }
});
