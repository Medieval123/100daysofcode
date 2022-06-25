        // *** Default Values ***
        function orderChickenWith(sideDish) {
        	if (sideDish === undefined) {
        		sideDish = "Medieval cookies!";
        	}
        	sideDish = sideDish || "Medieval cookies!"
        	console.log("Chicken with " + sideDish);
        }

        orderChickenWith("noodles");
        orderChickenWith();

      