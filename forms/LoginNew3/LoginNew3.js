
let userName = ""
let userPN = ""

hmbLogin3.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Add Your Phone Number":
        ChangeForm(LoginNew3)
        break;
      case "List":
        ChangeForm(listView)
        break;
      case "Calendar":
        ChangeForm(Calendar)
        break;
      case "Map":
        ChangeForm(Map4)
        break;
 
  }
  }
}
;
 
btnAdd3.onclick = function() {
userName = txtName3.value 
userPN = txtPN3.value
  query = "INSERT INTO users (name,phone) VALUES " + "("+ "'" + userName + "'," + "'" + userPN + "'" + ")"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jat82519&pass=" + pw + "&database=jat82519&query=" + query)

  if (req.status == 200) {
    if (req.responseText == 500) 
      lblHeader3.value = "You have successfully added to the text list!";
    else
      lblHeader3.value = "There was a problem with adding your name and number";
  }  else 
    console.log("Error: " + req.status);

};