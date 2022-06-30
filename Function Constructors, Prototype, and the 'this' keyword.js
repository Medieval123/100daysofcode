     // ***** The "This" Keyword  *****

	function test() {
	console.log("Always Believe that Something Extraordinary is about to happen. GODSPEED!")
	console.log(this);
	this.myName = "Hiruzen Sarutobi";
}
test();
console.log(window.myName);

               // *** Function Constructors ***

    function Circle (radius) {
    	this.radius = radius;
    	this.getArea = function () {
    		return Math. PI * Math.pow(this.radius, 2);
    	};
    }
 		         // **** Prototype  ****

 		Circle.prototype.getArea = function () {
 			Math.PI * Math.pow(this.radius, 2);
 		};

  console.log("To find the Area of the Circle:")

    var myCircle = new Circle(10); // New Object();
    console.log(myCircle);
    console.log(myCircle.getArea());


    var myOtherCircle = new Circle(20);
    console.log(myOtherCircle);