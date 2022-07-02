             // ****  Arrays in Javascript  ****
      var array = new Array();
      array[0] = "Medieval!";
      array[1] = "JSS1 Diligence";
      array[2] = function (name) {
      	console.log("Hello " + name)
      };
      array[3] = {course: "HTML, CSS, and Javascript for web developers"};

      console.log(array);
      console.log(array[1]);
      array[2](array[0]);
      console.log(array[3].course);

              // *** Short hand array imitation ***
              var names = ["Conscious", "Committed", "Consistent"];
              console.log(names);

              for (var i = 0; i < names.length; i++) {
              	console.log("Be " + names[i]);
              }

         var names2 = ["Olabiyi Judah", "Intelligence", "Productivity"];

         var myObj = {
         	name: "Olabiyi Judah",
         	Course: "HTML/CSS/JS",
         	Platforms: "COURSERA, Youtube, Udemy, Twitter, w3schools"
         };

         for (var prop in myObj) {
         	console.log(prop + ": " + myObj[prop]);
         }