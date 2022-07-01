     // **  Object literals and 'This'  **
   var literalCircle = {
   	radius: 240,

   	getArea:function () {
   		var self = this;
   		console.log(this);

   		var increaseRadius = function (){
   			self.radius = 269;
   		};
   		increaseRadius();
   		console.log(this.radius);

   		return Math.PI * Math.pow(this.radius, 2);
   	}
   };

   console.log(literalCircle.getArea());