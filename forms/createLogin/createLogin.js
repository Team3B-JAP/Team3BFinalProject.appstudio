
hmbLogin.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "List":
        ChangeForm(listView)
        break;
      case "Calendar":
        ChangeForm(Calendar)
        break;
      case "Map":
        ChangeForm(Map2)
        break;
      case "Add Your Phone Number":
        ChangeForm(createLogin)
        break;
  }
  }
}

let query = ""
let results = ""
let pw = "JTjt3688!"
let userName = ""
let userPN = ""
 
btnAdd.onclick = function() {
userName = txtName.value 
userPN = txtPN.value
  query = "INSERT INTO users (name,phone) VALUES " + "("+ "'" + userName + "'," + "'" + userPN + "'" + ")"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jat82519&pass=" + pw + "&database=jat82519&query=" + query)

  if (req.status == 200) {
    if (req.responseText == 500) 
      alert("You have successfully added to the text list!");
    else
      alert("There was a problem with adding your name and number");
  }  else 
    console.log("Error: " + req.status);

}


