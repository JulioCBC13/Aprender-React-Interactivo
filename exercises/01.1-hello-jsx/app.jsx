import React from "react";
import ReactDOM from "react-dom";

// if we have a variable
let age = "12";
let name = ("John", "julio");
let anos = "anos";

// we can use it in our html like this
let output = (
	<span>
		{name} is {age} {anos} old
	</span>
);

// use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
