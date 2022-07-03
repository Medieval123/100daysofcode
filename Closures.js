       function makeMultiplier(multiplier) {
       		// var multiplier = 2;
       		function b() {
       			console.log("Multiplier is: " + multiplier);
       		}
       		b();
            	var myFunc = function (x) {
            		return multiplier * x;
            	};
            	return myFunc;
            }
            var doubleAll = makeMultiplier(2);
            console.log(doubleAll(10));
                // Lexical Scoping
            function greeting() {
            	let message = 'The Medieval Project';
            			function sayHi() {
            		console.log(message);
            	}
            	return sayHi;
            }
            let hi = greeting();
            hi();
              
            function greeting(message) {
            	return function(name){
            		return message + ' ' + name;
            	}
            }
            let sayHi = greeting('Hi');
            let sayHello = greeting('Hello');
            console.log(sayHi('Coursera'));
            console.log(sayHello('Clubhouse!'));
            			// Js Closures in loops
            for (var index = 1; index <= 3; index++) {
            	setTimeout(function () {
            		console.log('after ' + index + ' second(s):' + index);
            	}, index * 1000);
            }