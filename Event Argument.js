
            document.addEventListener("DOMContentLoaded",
                function (event) {

             function sayHello (event) {
                console.log(event);

        this.textContent = "ALWAYS!!";
        var name = document.getElementById("name").value;
        var message = "<h2>Hello " + name + "!</h2>";

        document.getElementById("content").textContent = message;

        document
        .getElementById("content")
        .innerHTML = message;

        if (name === "Judah") {
            var title =
            document
            .querySelector("#title")
            .textContent;
            title += "     ";

            document.querySelector("h3").textContent = title;
        }
    }

              // UNOBSTRUSIVE Event Binding
    document.querySelector("button").addEventListener("click", sayHello);
      
        document.querySelector("body")
        .addEventListener("mousemove",
            function (event) {
                if (event.shiftKey == true) {
                console.log("x: " + event.clientX);
                console.log("y: " + event.clientY);
             }
            }
        );

        }
    );







     console.log(document instanceof HTMLDocument);           
    // document.querySelector("button").onclick = sayHello;