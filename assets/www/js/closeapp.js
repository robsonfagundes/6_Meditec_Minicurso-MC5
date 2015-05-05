// confirm close app
function showConfirm() {
	navigator.notification.confirm(
	'O App Será Encerrado', // message
	exitFromApp, // callback to invoke with index of OK button pressed
	'Obrigado Por Utilizar App6Meditec!', // title
	'Cancelar,OK' // buttonLabels
	);
}

// close app
function exitFromApp(buttonIndex) {
	if (buttonIndex === 2) {
		navigator.app.exitApp();
	}
}