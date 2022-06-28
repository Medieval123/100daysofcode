     function multiply(x, y) {
     	return x * y;
     }
     console.log(multiply(5, 3));
     multiply.version = "v.1.0.0";

     console.log(multiply.toString());
     console.log(multiply.version)

            // ***  Function factory ***
            function makeMultiplier(multiplier) {
            	var myFunc = function (x) {
            		return multiplier * x;
            	};

            	return myFunc;
            }
            var multiplyyby3 = makeMultiplier(3);
            console.log(multiplyyby3(100));

            var doubleAll = makeMultiplier(2);
            console.log(doubleAll(1245));

                 // ** Passing Functions as Arguments **
                 function doOperationOn(x, operation) {
                 	return operation(x);
                 }
                 var result = doOperationOn(56, multiplyyby3);
                 console.log(result);
                 result = doOperationOn(8192, doubleAll);
                 console.log(result);
