$('button').click(function() {
            var input = $('input').val();
            $(".images").html("");
            if (input === "Hungry") {
                hungryMood();
            } else if (input === "Annoyed") {
                //annoyedMood();
            } else if (input === "Angry") {
                //angryMood();
            } else if (input === "Calm") {
                //calmMood():
            } else {
                alert("PLEASE ENTER HUNGRY,ANNOYED,ANGRY OR CALM");
                }

            });

        function hungryMood() {
            changeBackground("orange");
            changeText("red");
            }
        function annoyedMood(){
            changeBackground("yellow");
            changeText("black");
        }
         function angryMood(){
            changeBackground("red");
            changeText("green");
        }
         function calmMood(){
            changeBackground("pink");
            changeText("purple");
        }


            function changeBackground(bodyColor) {
                $("body").css("background-color", bodyColor);
            }
            function changeText(textColor) {
                $("body").css("color", textColor);
            }