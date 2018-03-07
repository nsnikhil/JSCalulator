function writeValue(clickedButton){
	var inputField = document.getElementById("value").value;
	var newValue = clickedButton.value;
	var val = inputField.concat(newValue);
	document.getElementById("value").value = val;
}

function findAnswer(){
	var inputField = document.getElementById("value").value;
	console.log(inputField);
	var operator = isValidInput(inputField);
	console.log(operator);
	if(operator!="null"){
		var index = inputField.indexOf(operator);
		var a = inputField.substring(0,index);
		var b = inputField.substring(index+1,inputField.length);
		if(isValidInput(a)=="null"&&isValidInput(b)=="null"){
			var value = calculate(operator,Number(a),Number(b));
			document.getElementById("value").value = value;
		}else{
			alert("Invalid Input");
		}
	}
}

function clearInput(){
	var inputField = document.getElementById("value").value;
	if(inputField.length>0){
			var newVal = inputField.substring(0,inputField.length-1)
			document.getElementById("value").value = newVal;
	}
}

function clearAll(){
	document.getElementById("value").value = "";
}

function isValidInput(input){
	if(input.includes("+"))
		return "+";
	if(input.includes("-"))
                 return "-";
	if(input.includes("*"))
                 return "*";
	if(input.includes("/"))
                 return "/";
	return "null"
}

function calculate(operator,a,b){
	if(operator == "+")
		return a+b;
	if(operator == "-")
                 return a-b;
	if(operator == "/")
                 return a/b;
	if(operator == "*")
                 return a*b;
}
