var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
		var d = new Date();
		var n = d.getTime();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},
	// Adiciona a hora e o dia que foi clicado
	myFunction: function() {
		var currentdate = new Date();
		var datetime = currentdate.getDate() + "/"
		+ (currentdate.getMonth()+1)  + "/"
		+ currentdate.getFullYear() + "  "
		+ currentdate.getHours() + ":"
		+ currentdate.getMinutes() + ":"
		+ currentdate.getSeconds();
		// var d = new Date();
		// var hora = d.getHours();
		// var minutos = d.getMinutes();
		// var tempoAgora = hora+':'+minutos;
		// console.log(tempoAgora);

		document.getElementById("demo").innerHTML = "<span>"+ datetime +"</span>";
	}

};
