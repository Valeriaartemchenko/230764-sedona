var popup = document.querySelector(".form");
var open = document.querySelector(".search-btn");
var form = document.querySelector("form");
var check_in = popup.querySelector("[name=v1]");
var check_out = popup.querySelector("[name=v2]");
var adults = popup.querySelector("[name-v3]");
var children = popup.querySelector("[name=v4]");

popup.classList.add("form-hide");

open.addEventListener("click",
 	function(event) {
 		event.preventDefault();
 		popup.classList.toggle("form-show");
 		});

form.addEventListener("submit", 
 	function(event) {
 		if (!check_in.value || !check_out.value 
 			|| !adults.value || !children.value )
 			{ 
 				event.preventDefault();
 				console.log("Нужно ввести данные");
 			} else {
 				localStorage.setItem ("check_in",check_in.value);
 				localStorage.setItem ("check_out",check_out.value);
 				localStorage.setItem ("adults",adults.value);
 				localStorage.setItem ("children",children.value);
 					}
 			});