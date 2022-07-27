//1. Using jQuery find all textareas, and makes a border. Then adds all paragraphs to the jQuery object to set their borders red
$(document).ready(function () {
    $("#btn1").click(function () {
        $(".area").addClass("styling").add(".para").addClass("styling");
    });
});

//2. Set the background color red of the following elements using jQuery.
$(document).ready(function () {
    $("#btn2").click(function () {
        $(".area2 , .para1").css("backgroundColor", "red");
    });
});

//3. Create a paragraph element with some text and append it to the end of the document body using jQuery.
$(document).ready(function () {
    $("#btn3").click(function () {
        $(".para3").add("<span>hello</span>").appendTo(document.body);
    });
});

//5.Using jQuery add the class " w3r_font_color " to the last paragraph element.
$(document).ready(function () {
    $("#btn4").click(function () {
        $("div.five p").last().addClass("w3r_font_color");
    });
});

//6. Using jQuery add the class "w3r_font_color" and w3r_background to the last paragraph element
$(document).ready(function () {
    $("#btn5").click(function () {
        $("div.six p").last().addClass("w3r_font2_color , w3r_background")
    })
})

//7. Using jQuery add a new class to an element that already has a class.
$(document).ready(function () {
    $("#btn6").click(function () {
        $(".para4").addClass("para4New");
    });
});

//8. Using jQuery insert some HTML after all paragraphs. 
$(document).ready(function () {
    $("#btn7").click(function () {
        $(".para5").last().after("<b>and<b>");
    });
});

//9.Using jQuery insert a DOM element after all paragraphs.
$(document).ready(function () {
    $("#btn100").click(function () {
        $("#nine11").after(document.createTextNode(" with dom Element "));
    });
});

//10.Insert a jQuery object after all paragraphs.
$(document).ready(function () {
    $("#btn99").click(function () {
        $(".ten2").after($(".ten1"));
    });
});

//11. Register a handler to be called when Ajax requests complete.
//Note: Set up a basic Ajax load request, attach the event handler to the document.Now make an Ajax request using any jQuery method.
$(document).ready(function () {
    $("#btn8").click(function () {
        $(".message").text("ajax call complete");
        $(".para6").load("https://jsonplaceholder.typicode.com/users");
    });
});

//12. Register a handler to be called when Ajax requests complete with an error. 

$(document).ready(function () {
    $(document).ajaxError(function () {
        alert("An error occured!");
    });
    $("#btn98").click(function () {
        $(".result").load("wrongfile.txt");
    });
});
//17.Using jQuery count every element (including head, body, etc.) in the document.
$(document).ready(function () {
    $("#btn9").click(function () {
        var elementCount = $("*").css("border", "3px solid blue").length;
        $("body").prepend("<h3>" + elementCount + " element found </h3>");
    });
});

//18.Using jQuery count all elements within a division.
$(document).ready(function () {
    $("#btn10").click(function () {
        var elementCountDiv = $(".righteen").find("*").css("border", "3px solid red").length;
        $(".para18").prepend("<h2>" + elementCountDiv + "</h2>");
    })
})

//19. Using jQuery click the button to animate the paragraph element with a number of different properties.
$(document).ready(function () {
    $("#btn11").click(function () {
        $(".para19").animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        });
    });
});

//20. Using jQuery animates a div's left property with a relative value.
$(document).ready(function () {
    $("#btn12").click(function () {
        $(".twenty").animate({
            left: "-=40px",
        })
        $("#btn13").click(function () {
            $(".twenty").animate({
                left: "+=40px",
            });
        });
    });
});

//21. Using jQuery animates the first div's left property and synchronizes the remaining divs.
$(document).ready(function () {
    $("#btn14").click(function () {
        $(".block").animate({
            left: "250px",
        }, "slow");
    });
});

//22. Using jQuery change the color of any div that is animated.
$(document).ready(function () {
    $("#btn15").click(function () {
        $(".managed div:animated").toggleClass("colored");
    });
    function animateIt() {
        $("#div1,#div2").slideToggle("slow", animateIt);
    }
    return animateIt();
});

//23. Using jQuery appends some text to all paragraphs.
$(document).ready(function () {
    $("#btn16").click(function () {
        $(".para23").append("<b>abcd</b>");
    });
});

//24. Using jQuery appends a jQuery object to all paragraphs.
$(document).ready(function () {
    $("#btn17").click(function () {
        $(".para24").append($("strong"));
    });
});

//25. Using jQuery appends an Element to all paragraphs.
$(document).ready(function () {
    $("#btn18").click(function () {
        $(".para25").append(document.createTextNode(" hello "));
    });
});

//26. Using jQuery append all spans to the element with specified id.
$(document).ready(function () {
    $("#btn19").click(function () {
        $(".spen").appendTo("#para26");
    });
});

//27. Using jQuery display the checked attribute and property of a checkbox as it changes.

//28. Find the title attribute of the first emphasized in the page
$(document).ready(function () {
    $("#btn28").click(function () {
        var title = $("em").attr("title");
        $("#para28").text(title);
    });
});

//29. Using jQuery find all links with an hreflang attribute de. 
$(document).ready(function () {
    $("#btn29").click(function () {
        $("a[hreflang = 'de'] ").css("border", "1px solid red");
    })
})

//30. Using jQuery find all the divisions with a name attribute that contains 'tutorial' and sets the background color yellow.
$(document).ready(function () {
    $("#btn30").click(function () {
        $(".thirty div[name*= 'tutorial'] ").css("background", "yellow");
    });
});

//31. Using jQuery find all the divisions with a name attribute that contains the word 'tutorial' and sets the background color yellow. 
$(document).ready(function () {
    $("#btn31").click(function () {
        $(".thirtyOne div[name~= 'tutorial']").css("background", "yellow");
    });
});

//32. Using jQuery finds all the divisions with an attribute name that ends with 'tutorial' and sets the background color yellow
$(document).ready(function () {
    $("#btn32").click(function () {
        $(".thirtyTwo div[name$= 'tutorial']").css("background", "yellow");
    });
});

//33. Finds all inputs with a value of "Red" and changes the text of the next sibling span.
$(document).ready(function () {
    $("#btn33").click(function () {
        $(".thirtyThree input[value='red']").next().text(" red ");
    });
});

//34. Finds all inputs that don't have the name 'color' and appends text to the span next to it.
$(document).ready(function () {
    $("#btn34").click(function () {
        $(".thirtyFour input[name!='color'] ").next().append("<b> not a color </b>");
    });
});

//35. Finds all inputs with an attribute name that starts with 'P' and puts text in them.
$(document).ready(function () {
    $("#btn35").click(function () {
        $(".thirtyFive input[name^='p'] ").val("input starts with p");
    });
});

//36. Inserts some HTML before all paragraphs using JQuery.
$(document).ready(function () {
    $("#btn36").click(function () {
        $(".thirtySix").before("<i>hello</i>");
    });
});

//37. Inserts a DOM element before all paragraphs using jQuery.
$(document).ready(function () {
    $("#btn37").click(function () {
        $(".thirtySeven p").before($(".bolld"));
    });
});

//38. Inserts a jQuery object before all paragraphs.
$(document).ready(function () {
    $("#btn38").click(function () {
        $(".thirtyEight p").before($(".eightBold"));
    });
});

//39. Demonstrate how to handle click and double-click on a paragraph.
$(document).ready(function () {
    $(".thirtyNine").click(function () {
        $(this).css("color", "red");
    });
    $(".thirtyNine1").dblclick(function () {
        $(this).css("color", "red");
    });
});

//40.Display a message when the focus is removed from an element.
$(document).ready(function () {
    $("#target").blur(function () {
        // alert("Remove focus from input1!");
        $("#forty").text("you remove from input1");
    });
});

//41. Find all button inputs and mark them using jQuery.
$(document).ready(function () {
    $("#btn41").click(function () {
        $(":button").addClass("marked");
    });
});

//42. Using jQuery add a callback or a collection of callbacks to a callback list.

$(document).ready(function () {
    $("#btn55").click(function () {
        var first = function (value) {
            console.log("first: " + value);
            // $(".fortyTow").text("first : " + value);
        };
        var second = function (value) {
            console.log("second: " + value);
        };
        var callbacks = $.Callbacks();
        //add function first to the list
        callbacks.add(first);
        //fire the item
        callbacks.fire("hello");
        //add function second to the list
        callbacks.add(second);
        //fire the item
        callbacks.fire("again hello");
    });
});

//43. Disable a callback list from doing anything more.
$(document).ready(function () {
    $("#btn50").click(function () {
        var f1 = function (value) {
            console.log("f1 :" + value);
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);
        callbacks.fire("yash");
        callbacks.disable();
        callbacks.fire("patel");
    })
})

//44. Test if the callback list has been disabled.

$(document).ready(function () {
    $("#btn95").click(function () {
        var third = function (value) {
            console.log("third :" + value);
        };
        var callbacks = $.Callbacks();

        //add function third to the list
        callbacks.add(third);

        //fire the item
        callbacks.fire("thirdddd");

        //disable callback
        callbacks.disable();
        $(".fortyThree").text(callbacks.disabled());
    });
});

//45. Using jQuery remove all of the callbacks from a list.
$(document).ready(function() {
    $("#btn82").click(function() {
        var f1 = function( value ) {
            console.log("f1 :" + value);
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);
        callbacks.fire("yash");
        callbacks.fire("patel");
        callbacks.remove(f1);
    });
});

//46.Call all of the callbacks with the given arguments
$(document).ready(function () {
    $("#btn94").click(function () {
        var f1 = function (value) {
            alert("f1 :" + value);
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);
        callbacks.fire("JavaScript");
        callbacks.fire("jQuery");
    });
});

//47. Using jQuery check if the callbacks have already been called at least once.
$(document).ready(function () {
    $("#btn93").click(function () {
        var f1 = function (value) {
            // $(".fortySeven").text("f1 : " + value);
            console.log("f1 : " + value);
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);
        callbacks.fire("JavaScript");
        callbacks.fire("jQuery");
        // $(".fortySeven1").text(callbacks.fired() );
        console.log(callbacks.fired());
    });
});

//48.Fire a list of callbacks with a specific context and an array of arguments.
$(document).ready(function () {
    $("#btn88").click(function () {
        var f1 = function (value) {
            console.log("f1 :" + value);
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);
        callbacks.fire("yash");
        callbacks.fire("patel");
        console.log(callbacks.fired());
    });
});

//49. Check if a callback list contains a specific callback.
$(document).ready(function () {
    $("#btn87").click(function () {
        var f1 = function (value) {
            console.log("f1 :" + value);
        };
        var f2 = function (value) {
            console.log("hello");
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);

        console.log(callbacks.has(f1));
        console.log(callbacks.has(f2));
    });
});

//50.Lock a callback list in its current state.
$(document).ready(function() {
    $("#btn86").click(function() {
        var f1 = function( value ) {
            console.log("f1 :" + value);
        };
        var callbacks = $.Callbacks();
        callbacks.add(f1);
        callbacks.fire("yash");
        //lock callback list so not add second value patel in list
        callbacks.lock();
        callbacks.fire("patel");
    });
});


