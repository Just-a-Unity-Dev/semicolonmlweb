function checkLength(){
  let length = document.getElementById("myText").value.length;
  let lengthEL = document.createElement('p');
  lengthEL.innerHTML = "Length: " + length;
  document.getElementById("elementlol").innerHTML = "Length: " + length;
}
