                // Immediately invoked function expressions

    (function (window) {

        var Godspeedgreeter = {};

 Godspeedgreeter.name = "GODSPEED!";

 var greeting = "Good Afternoon Developers! "
 
 Godspeedgreeter.sayHi = function () {

    console.log(greeting + Godspeedgreeter.name);

 }
 window.Godspeedgreeter = Godspeedgreeter;

    })(window);



