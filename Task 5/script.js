//Create a dropdown list of your own choice but the elements/data of the dropdown should come through JavaScript array concept not via HTML traditional concept. 
var dropdown=document.getElementById("dropdown");
var options=["Mardan","Peshawar","Swat","Chitral"];
for(var i=0;i<options.length;i++){
    var option=document.createElement("option")
    option.text=options[i];
    dropdown.add(option);
}