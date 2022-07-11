   document.addEventListener("DOMContentLoaded",
   		function (event) {

   			//Unobstrusive event binding
   			document.querySelector("button")
   			.addEventListener("click", function () {
   				
   				// Call server to get the name
   				$ajaxUtils
   				.sendGetRequest("name.json",
   					function (res) {
   	                var message =
                    res.firstName = " " + res.lastName
                    if (res.likesChineseFood) {
                        message += " LIKES CHINESE FOOD";
                    }
                    else {
                        message += " doesn't like Chinese food"
                    }
                    message += " AND USES ";
                    message += res.numberOfDisplays + 2;
                    message += " DISPLAYS FOR WEB DEVELOPMENT.";

                    document.querySelector("#content")
                    .innerHTML = "<h5>" + message + "</h5>"
                });
            });
        }
    );