// let oldPass = document.getElementById('Pass');
// let newPass = document.getElementById('newPass');
// let passEdit = document.getElementById('passEdit');
// let passSave = document.getElementById('passSave');
// let passCancel = document.getElementById('passCancel');
// let email = document.getElementById('emailInput').getElementsByTagName("input")[0];
// let emailEdit = document.getElementById('emailEdit');
// let emailSave = document.getElementById('emailSave');
// let emailCancel = document.getElementById('emailCancel');

let emailForm = document.forms.emailForm;
let passwordForm = document.forms.passwordForm;
let formContainerList = document.getElementsByClassName("info_input_wrapper");
emailForm.emailEdit.onclick = function () {
	formContainerList[0].classList.add("edit");
	emailForm.emailInput.removeAttribute("disabled");
	emailForm.emailInput.placeholder = "Enter new here";

}
emailForm.emailSave.onclick = function () {
	console.log(emailForm.emailInput.value);
}
emailForm.onsubmite = function () {
	formContainerList[0].classList.remove("edit");
	emailForm.emailInput.addAttribute("disabled");
}
emailForm.emailCancel.onclick = function () {
	formContainerList[0].classList.remove("edit");
}
passwordForm.passEdit.onclick = function () {
	formContainerList[1].classList.add("edit");
	passwordForm.password.removeAttribute("disabled");
}
passwordForm.passSave.onclick = function () {
	console.log(passwordForm.passInput.value);
}
passwordForm.onsubmite = function () {
	formContainerList[1].classList.remove("edit");
	passwordForm.password.addAttribute("disabled");
}
passwordForm.passCancel.onclick = function () {
	formContainerList[1].classList.remove("edit");

}
// emailSave.onclick = function () {
// 	if (document.forms.emailForm)
// }