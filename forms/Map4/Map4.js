
hmbMap4.onclick=function(z){
  if (typeof(z) == "object") {   
    return
  } else {
  switch(z) {
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
}

var marker;
var infowindow;
var currentLat,currentLong;

 function gotLocation(location, lat, long) {
   
     GoogleMap4.mapOptions.latitude = location.coords.latitude;
     GoogleMap4.mapOptions.longitude = location.coords.longitude;
     GoogleMap4.refresh();

     //Put a marker on our location
     point1 = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
     marker1 = GoogleMap4.setMarker({
         position: point1
     });
     
     //McDicks
     point2 = new google.maps.LatLng(41.268220, -95.947420);
       marker2 = GoogleMap4.setMarker({
         position: point2
     });
     
       //Hyvee
     point3 = new google.maps.LatLng(41.242390, -95.994209);
       marker3 = GoogleMap4.setMarker({
         position: point3
     });
     
       //Subway
     point4 = new google.maps.LatLng(41.268290, -95.946760);
       marker4 = GoogleMap4.setMarker({
         position: point4
     });
     
      //Popeyes
     point5 = new google.maps.LatLng(41.260110, -95.982160);
       marker5 = GoogleMap4.setMarker({
         position: point5
     });
 

 };

 }
 
    btnCL4.onclick = function() {
  // have to run this before you do anything else - call this getLocation button
     navigator.geolocation.getCurrentPosition(gotLocation);
     NSB.WaitCursor(true);
 }
 
 }
 

 