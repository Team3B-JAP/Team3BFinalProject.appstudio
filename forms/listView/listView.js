
hmbList.onclick=function(s){
  if (typeof(s) == "object") {   
    return
  } else {
  switch(s) {
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


var couponList = ['McDonalds','Hyvee','Popeyes','Subway']
var address1 = ""
var coupon1 = ""

let req = ""
let query = ""
let results = ""
let pw = "JTjt3688!"

listView.onshow=function(){
    drpCoupons.clear()   
  for (i = 0; i <= couponList.length -1; i++)
    drpCoupons.addItem(couponList[i])
}

drpCoupons.onclick=function(s){
   // this 'if' kicks user out if they just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  
      
      
drpCoupons.onclick=function(s){
    if (typeof(s) == "object")
        return
      else {
        console.log(s)
drpCoupons.value = s
  query = `SELECT address FROM addresses WHERE restaurant = '${s}'`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jat82519&pass=" + pw + "&database=jat82519&query=" + query)

  if (req.status == 200) {
    address1 = JSON.parse(req.responseText)
    console.log(address1)
}

query = `SELECT deal FROM coupons WHERE restaurant = '${s}'`
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jat82519&pass=" + pw + "&database=jat82519&query=" + query)
  
   if (req.status == 200) {
    coupon1 = JSON.parse(req.responseText)
    console.log(coupon1)
  }  ;
      

  if (drpCoupons.selection=="McDonalds"){
    QRCodeMcD.show();
  } else if (drpCoupons.selection=="Hyvee") {
    QRCodeHyv.show();
  } else if (drpCoupons.selection=="Popeyes") {
    QRCodePop.show();
  } else {
    QRCodeSW.show();
  }
        drpCoupons.value = s
      lblCoupon.value = `${drpCoupons.selection} is ${coupon1} and  is located at ${address1}`
    }
}


  
  
  
  
  





