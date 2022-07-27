    $(document).ready(function() {
        $(".b1").click(function(){
            $("p").hide(1000);
        });
        $(".b2").click(function(){
            $("p").show("fast");
        });
    });

    //toggle used to shown element are hidden and hidden element are shown...
    $(document).ready(function() {
        $("#b1").click(function() {
            $("p.togle").toggle("slow");
        });
    });

    //fadeIn used to show hidden element
    //fadeout used to hidden element show
    //fadetoggle used to run both fadeIn & fadeOut

    $(document).ready(function() {
        $(".btn1").click(function() {
            $(".st1").fadeIn("fast");
        });
        $(".btn1").click(function() {
            $(".st2").fadeIn("slow");
        });
        $(".btn1").click(function() {
            $(".st3").fadeIn(1000);
        });
    });

    //fadeToggle

    $(document).ready(function() {
        $(".btn2").click(function() {
            $(".ff1").fadeToggle("slow");
        })
    })

    //set

    $(document).ready(function() {
        $("#btn3").click(function() {
            $("#p1").text("hello patel");
        });
        $("#btn4").click(function() {
            $("#input1").val("alex patel");
        });
    });

    //append
    $(document).ready(function() {
        $("#btn5").click(function() {
            $("#p2").append("<b> dadu-dadu patel <b>");
        });
        $("#btn6").click(function() {
            $("ol").append("<li>hello</li>");
        });
    });

    //remove & empty

    $(document).ready(function() {
        $("#remove").click(function() {
            $(".divv1").empty(); // also use to only remove with class like .remove(".class.#id")
        });                      // not empty bcz empty erase all child element
    });

    //remove with class & id 

    $(document).ready(function() {
        $("#btn7").click(function() {
            $("p").remove("p.re1, p.re2 , p#re3");
        });
    });

    //add class

    $(document).ready(function() {
        $("#btn8").click(function() {
            $(".pp, .ppp, .pppp").addClass("addpclass");
            $(".divp").addClass("divWithp");
        });
    });

    $(document).ready(function() {
        $("ul").parent().css({"color" : "red"});
    });

    //to find first element

    $(document).ready(function() {
        $("#btn9").click(function() {
            $(".fir").first().css({"background-color" : "red" , "border" : "5px solid blue"});
        });
    });

    $(document).ready(function() {
        $("#btn10").click(function() {
            $("#eq p").eq(1).css({"background-color" : "red"});
        });
    });

    //ajax call

    $(document).ready(function() {
        $("#btn11").click(function() {
            $(".store").load("https://jsonplaceholder.typicode.com/posts");
        });
    });

    $(document).ready(function() {
        $(".hh").nextAll().css({"border" : "5px solid red"});
    });

    $(document).ready(function() {
        $("#btn12").click(function() {
            $(".para").css({"color":"red"});
        })
    })