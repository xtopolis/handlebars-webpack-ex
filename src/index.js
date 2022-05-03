var mainTemplate = require("./templates/main.hbs")

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = mainTemplate({
		greeting: "Welcome to my Website",
		projects: [
			{ title: "Science", description: "Let's do science!" },
			{ title: "Math", description: "You can count on this project..." },
			{ title: "Art" }
		]
	});
	document.body.appendChild(div);
});