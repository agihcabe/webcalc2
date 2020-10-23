function updateOutput() {
//calculate
  //get form
  var form = document.getElementById("calc");
  //get output
  var out = form.elements["z"];
  //get two numbers
  var num1 = parseInt(form.elements["x"].value);
  var num2 = parseInt(form.elements["y"].value);
  //get operator
  var operator = parseInt(form.elements["op"].value);
  //set output depending on operator
  switch(operator) {
    //add
    case 0:
	  out.value = num1+num2;
    break;
  	//subtract
	  case 1: out.value = num1-num2;
	  break;
	  //multiply
	  case 2: out.value = num1*num2;
	  break;
	  //divide
	  case 3: out.value = (num1/num2).toFixed(1);//only one digit after decimal place
	  break;
	  default:
  	break;
  }
}
