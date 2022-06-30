let userInput = document.querySelector("#user");
let passwordInput = document.querySelector("#password");

let userPlaceholder = document.querySelector(".label--user");
let passwordPlaceholder = document.querySelector(".label--password");

userInput.addEventListener("input", () => {
	if (userInput.value !== "") {
		userPlaceholder.style.display = "inline";
	} else {
		userPlaceholder.style.display = "none";
	}
});

passwordInput.addEventListener("input", () => {
	if (passwordInput.value !== "") {
		passwordPlaceholder.style.display = "inline";
	} else {
		passwordPlaceholder.style.display = "none";
	}
});
