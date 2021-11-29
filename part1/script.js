var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function checkUsername(username) {
	var user = document.querySelector(".sign-up__form__block__text_u");

	if (username.trim().length === 0) {
		user.innerHTML("(Username should not be empty)");
		user.style.color = "red";
		user.style.fontStyle = "italic";
		user.style.FontSize = "15px";

		document.querySelector(".sign-up__form__block__username").style.borderColor = "red";

		return false;
	} else {
		user.innerHTML("Username");
		user.style.color = "green";
		user.style.fontStyle = "normal";
		user.style.FontSize = "13px";

		document.querySelector(".sign-up__form__block__username").style.borderColor = "green";
	}
	return true;
};

function checkEmail(email) {
	var mail = document.querySelector(".sign-up__form__block__text_e");

	if (!email.trim().match(emailPattern)) {
		mail.innerHTML("(Your email address must be in the format of name@domain.com)");
		mail.style.color = "red";
		mail.style.fontStyle = "italic";
		mail.style.FontSize = "15px";

		document.querySelector(".sign-up__form__block__email").style.borderColor = "red";

		return false;
	} else {
		mail.innerHTML("Email");
		mail.style.color = "green";
		mail.style.fontStyle = "normal";
		mail.style.FontSize = "13px";

		document.querySelector(".sign-up__form__block__email").style.borderColor = "green";
	}
	return true;
};

function checkPassword(password) {
	var pass = document.querySelector(".sign-up__form__block__text_p");

	if (!password.trim().match(passwordPattern)) {
		pass.innerHTML("(Your password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character between 8 to 15 characters)");
		pass.style.color = "red";
		pass.style.fontStyle = "italic";
		pass.style.FontSize = "15px";

		document.querySelector(".sign-up__form__block__password").style.borderColor = "red";

		return false;
	} else {
		pass.innerHTML("Password");
		pass.style.color = "green";
		pass.style.fontStyle = "normal";
		pass.style.FontSize = "13px";

		document.querySelector(".sign-up__form__block__password").style.borderColor = "green";
	}
	return true;
};

function checkConfirm(password, confirm) {
	var conf = document.querySelector(".sign-up__form__block__text_c");

	if (!confirm.match(password)) {
		conf.innerHTML("(Your passwords should be same)");
		conf.style.color = "red";
		conf.style.fontStyle = "italic";
		conf.style.FontSize = "15px";

		document.querySelector(".sign-up__form__block__confirm").style.borderColor = "red";

		return false;
	} else {
		conf.innerHTML("Password");
		conf.style.color = "green";
		conf.style.fontStyle = "normal";
		conf.style.FontSize = "13px";

		document.querySelector(".sign-up__form__block__confirm").style.borderColor = "green";
	}
	return true;
};

document.querySelector(".sign-up__form__block__register").addEventListener("click", function(event) {
	event.preventDefault();
		
	var username = document.querySelector(".sign-up__form__block__username").value;
	var email = document.querySelector(".sign-up__form__block__email").value;
	var password = document.querySelector(".sign-up__form__block__password").value;
	var confirm = document.querySelector(".sign-up__form__block__confirm").value;
        
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
	var mail = document.querySelector(".sign-up__form__block__text_e");

	for (let i = 0; i < localStorage.length; i++) {
		var user = JSON.parse(localStorage.getItem(i));

		if (user.email == email) {
			mail.innerHTML("Email");
			mail.style.color = "green";
			mail.style.fontStyle = "normal";
			mail.style.FontSize = "13px";

			document.querySelector(".sign-up__form__block__email").style.borderColor = "green";

			return true;
		}
	}
	return false;
};

function comparePassword(password) {
	var pass = document.querySelector(".sign-up__form__block__text_p");

	for (let i = 0; i < localStorage.length; i++) {
		var user = JSON.parse(localStorage.getItem(i));

		if (user.password == password) {
			pass.innerHTML("Password");
			pass.style.color = "green";
			pass.style.fontStyle = "normal";
			pass.style.FontSize = "13px";

			document.querySelector(".sign-up__form__block__password").style.borderColor = "green";

			return true;
		}
	}
	return false;
};

document.querySelector(".sign-up__form__block__login").addEventListener("click", function(event) {
	event.preventDefault();

	var email = document.querySelector(".sign-up__form__block__email").value;
	var password = document.querySelector(".sign-up__form__block__password").value;

	var mail = document.querySelector(".sign-up__form__block__text_e");
	var pass = document.querySelector(".sign-up__form__block__text_p");

	if (compareEmail(email)) {
		if (comparePassword(password)) {
			var text = document.getElementsById("login-text");
			text.style.display = "block";
			text.style.fontSize = "20px";
			text.style.fontWeight = "600";
			text.style.color = "green";

		} else {
			pass.innerHTML("(There is no such password)");
			pass.style.color = "red";
			pass.style.fontStyle = "italic";
			pass.style.FontSize = "15px";

			document.querySelector(".sign-up__form__block__password").style.borderColor = "red";
		}
	} else {
		mail.innerHTML("(There is no such email)");
		mail.style.color = "red";
		mail.style.fontStyle = "italic";
		mail.style.FontSize = "15px";

		document.querySelector(".sign-up__form__block__email").style.borderColor = "red";
	}
});