hmbCal.onclick=function(b){
  if (typeof(b) == "object") {   
    return
  } else {
  switch(b) {
case "List":
  ChangeForm(listView)
  break;
case "Calendar":
  ChangeForm(Calendar)
  break;
case "Map":
  ChangeForm(Map4)
  break;
case "Add Your Phone Number":
  ChangeForm(LoginNew3)
  break;
}
}
};