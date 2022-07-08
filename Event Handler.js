            // ***  Event Handling ***

            document.addEventListener("DOMContentLoaded",
                function (event) {

             function sayHello (event) {
        this.textContent = "ALWAYS!!";
        var name = document.getElementById("name").value;
        var message = "<h2>Something Extraordinary is about to happen! " + name + "!</h2>";

        document.getElementById("content").textContent = message;

        document
        .getElementById("content")
        .innerHTML = message;

        if (name === "Godspeed") {
            var title =
            document
            .querySelector("#title")
            .textContent;
            title += "     Lovin' it!";

            document.querySelector("h3").textContent = title;
        }
    }

              // UNOBSTRUSIVE Event Binding
    document.querySelector("button").addEventListener("click", sayHello);
        }
    );
     console.log(document instanceof HTMLDocument);           
    // document.querySelector("button").onclick = sayHello;

            

   

