var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var newslider = document.getElementById("mynewRange");
var newoutput = document.getElementById("newdemo");
newoutput.innerHTML = newslider.value;

newslider.oninput = function() {
  newoutput.innerHTML = this.value;
}

function slider1()
{
  document.getElementById("s1").style.visibility="visible";
}

var thirdslider = document.getElementById("thirdRange");
var thirdoutput = document.getElementById("thirddemo");
thirdoutput.innerHTML = thirdslider.value;

thirdslider.oninput = function() {
  thirdoutput.innerHTML = this.value;
}


var fouthslider = document.getElementById("fouthRange");
var fouthoutput = document.getElementById("fouthdemo");
fouthoutput.innerHTML = fouthslider.value;

fouthslider.oninput = function() {
  fouthoutput.innerHTML = this.value;
}







function slider1()
{
  document.getElementById("s1").style.visibility="visible";
}
function add()
{
  
  document.getElementById("form1").style.visibility="visible";
  document.getElementById("add").style.visibility="visible";
}


function create(){
  
var title = document.getElementById("task").value;
var value1 = document.getElementById("value2").value;

  
  if (title == null && value1 == null) {

    prompt("User cancelled the prompt.");
    
   } 
   else {
    document.getElementById("title").innerHTML = title;
    document.getElementById("fouthRange").value = value1;
    document.getElementById("fouthdemo").innerHTML = value1;
    // document.getElementById("add").style.visibility="visible";
       }
  

}






  // document.getElementById("add").style.visibility="visible";

  
  





