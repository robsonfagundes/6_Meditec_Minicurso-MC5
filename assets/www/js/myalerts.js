// show alert for user
function alerta1() {
	navigator.notification.alert("Hello 6Meditec - MinicursoMC5. \nObrigado!!!");
	vibrate();
	playBeep();
}

// show alert for user with: message, callback, title, buttonLabels
function alerta2() {
	navigator.notification.alert(
	'You are the winner!', // message
	alerta1(), // callback
	'App6Meditec', // title
	'Done!' // buttonLabels
	);
}

// Once Beep, if you need more set times number in: beep(5)
function playBeep() {
    navigator.notification.beep(1);
}

// Vibrate for 2 seconds
function vibrate() {
    navigator.notification.vibrate(2000);
}