$(document).foundation();
var count = 2;
function validate() {
  var un = document.name.username.value;
  var pw = document.name.pword.value;
  var valid = false;

  var unArray = ["1650","1650"];
  var pwArray = ["pearl","Pearl"];

  for (var i=0; i <unArray.length; i++) {
    if ((un == unArray[i]) && (pw == pwArray[i])) {
      valid = true;
      break;
    }
  }

  if (valid) {
    window.location = "logged-in.html";
    return false;
  }

  var t = " tries";

  if (count == 1) { t = " try" }

  if (count >= 1) {
    alert ("Invalid username and/or password.  You have " + count + t + " left.");
    document.name.username.value = "";
    document.name.pword.value = "";
    setTimeout("document.name.username.focus()", 25);
    setTimeout("document.name.username.select()", 25);
    count --;
  }

  else {
    alert ("Still incorrect! You have no more tries left!");
    document.name.username.value = "No more tries allowed!";
    document.name.pword.value = "";
    document.name.username.disabled = true;
    document.name.pword.disabled = true;
    return false;
  }

}
