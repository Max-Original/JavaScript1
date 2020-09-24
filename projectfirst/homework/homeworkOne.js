"use strict"
//first
let admin;
let name = "John";
admin = name;
console.log(admin);
//second

let login = "admin";
let password = "Master";


if(login == "cancel"){
	console.log("Canceled");
}else if (login == "admin"){
	console.log("Password?");
	if(password == "cancel"){
		console.log("canceled");
	}
	else if(password == "TheMaster"){
		console.log("Welcome");
	}
	else{
		console.log("Wrong password");	
	}	
}
else{
	console.log("i dont know you");
}

