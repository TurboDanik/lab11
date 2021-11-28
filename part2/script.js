var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function checkUsername(username) {
	if (username.trim().length === 0) {
		$(".sign-up__form__block__text_u")
			.text("(Username should not be empty)")
			.css("color", "red")
			.css("fontStyle", "italic")
			.css("fontSize", "15px");

		$(".sign-up__form__block__username")
			.css("borderColor", "red");

		return false;
	} else {
		$(".sign-up__form__block__username")
			.css("borderColor", "green");

		$(".sign-up__form__block__text_u")
			.text("Username")
			.css("color", "green")
			.css("fontStyle", "normal")
			.css("fontSize", "13px");
	}
	return true;
};

function checkEmail(email) {
	if (!email.trim().match(emailPattern)) {
		$(".sign-up__form__block__text_e")
			.text("(Your email address must be in the format of name@domain.com)")
			.css("color", "red")
			.css("fontStyle", "italic")
			.css("fontSize", "15px");

		$(".sign-up__form__block__email")
			.css("borderColor", "red");

		return false;
	} else {
		$(".sign-up__form__block__email")
			.css("borderColor", "green");

		$(".sign-up__form__block__text_e")
			.text("Email")
			.css("color", "green")
			.css("fontStyle", "normal")
			.css("fontSize", "13px");
	}
	return true;
};

function checkPassword(password) {
	if (!password.trim().match(passwordPattern)) {
		$(".sign-up__form__block__text_p")
			.text("(Your password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character between 8 to 15 characters)")
			.css("color", "red")
			.css("fontStyle", "italic")
			.css("fontSize", "15px");

		$(".sign-up__form__block__password")
			.css("borderColor", "red");

		return false;
	} else {
		$(".sign-up__form__block__password")
			.css("borderColor", "green");

		$(".sign-up__form__block__text_p")
			.text("Password")
			.css("color", "green")
			.css("fontStyle", "normal")
			.css("fontSize", "13px");
	}
	return true;
};

function checkConfirm(password, confirm) {
	if (!confirm.match(password)) {
		$(".sign-up__form__block__text_c")
			.text("(Your passwords should be same)")
			.css("color", "red")
			.css("fontStyle", "italic")
			.css("fontSize", "15px");

		$(".sign-up__form__block__confirm")
			.css("borderColor", "red");

		return false;
	} else {
		$(".sign-up__form__block__confirm")
			.css("borderColor", "green");

		$(".sign-up__form__block__text_c")
			.text("Confirm Password")
			.css("color", "green")
			.css("fontStyle", "normal")
			.css("fontSize", "13px");
	}
	return true;
};

$(".sign-up__form__block__register").on("click", function(event) {
	event.preventDefault();
		
	var username = $(".sign-up__form__block__username").val();
	var email = $(".sign-up__form__block__email").val();
	var password = $(".sign-up__form__block__password").val();
	var confirm = $(".sign-up__form__block__confirm").val();
        
    if (checkUsername(username) && checkEmail(email) && checkPassword(password) && checkConfirm(password, confirm)) {
       	var formData = {
			username: username,
			email: email,
			password: password,
			confirm: confirm
		};

        localStorage.setItem(localStorage.length, JSON.stringify(formData));
        document.location.reload(true);
    }
});

function compareEmail(email) {
	for (let i = 0; i < localStorage.length; i++) {
		var user = JSON.parse(localStorage.getItem(i));
		if (user.email == email) {

			$(".sign-up__form__block__email")
				.css("borderColor", "green");

			$(".sign-up__form__block__text_e")
				.text("Email")
				.css("color", "green")
				.css("fontStyle", "normal")
				.css("fontSize", "13px");

			return true;
		}
	}
	return false;
};

function comparePassword(password) {
	for (let i = 0; i < localStorage.length; i++) {
		var user = JSON.parse(localStorage.getItem(i));
		if (user.password == password) {

			$(".sign-up__form__block__password")
				.css("borderColor", "green");

			$(".sign-up__form__block__text_p")
				.text("Password")
				.css("color", "green")
				.css("fontStyle", "normal")
				.css("fontSize", "13px");

			return true;
		}
	}
	return false;
};

$(".sign-up__form__block__login").on("click", function(event) {
	event.preventDefault();

	var email = $(".sign-up__form__block__email").val();
	var password = $(".sign-up__form__block__password").val();

	if (compareEmail(email)) {
		if (comparePassword(password)) {
			$("#login-text")
				.css("display", "block")
				.css("fontSize", "20px")
				.css("fontWeight", "600")
				.css("color", "green");

		} else {
			$(".sign-up__form__block__text_p")
				.text("(There is no such password)")
				.css("color", "red")
				.css("fontStyle", "italic")
				.css("fontSize", "15px");

			$(".sign-up__form__block__password")
				.css("borderColor", "red");
		}
	} else {
		$(".sign-up__form__block__text_e")
			.text("(There is no such email)")
			.css("color", "red")
			.css("fontStyle", "italic")
			.css("fontSize", "15px");

		$(".sign-up__form__block__email")
			.css("borderColor", "red");
	}
});