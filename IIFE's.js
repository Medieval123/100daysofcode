       (function (window) {
        	var MedievalGreeter = {};
        	
MedievalGreeter.name = "Olabiyi Judah Oluwatunmise!";

var greeting = "Hello "

MedievalGreeter.sayHello = function () {

	console.log(greeting + MedievalGreeter.name);

}
    window.MedievalGreeter = MedievalGreeter;

})(window);