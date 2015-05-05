// verify internet connection
function checkConnection() {
	if ((navigator.network.connection.type === Connection.NONE)
			|| (navigator.network.connection.type === Connection.UNKNOWN)) {
		navigator.notification.alert("Seu Aparelho não está conectado a web! "
				+ "\nConecte seu aparelho e abra o App novamente. "
				+ "\nObrigado!!!");
		navigator.app.exitApp();
	} else {
		navigator.notification.alert("Sua Conexão é: "
				+ navigator.network.connection.type);
	}
}