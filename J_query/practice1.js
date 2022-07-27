//https://nicepage.com/



//1.Test if jQuery is loaded
$(document).ready(function () {
    $("#first1").click(function () {
        $("#first1").hide();
    });
});

//2.Scroll to the top of the page with jQuery.
$(document).ready(function () {
    $(".scrollTop").click(function () {
        $("html , body").animate({ scrollTop: 0 }, "slow");
    });
});

//3. Disable right click menu in html page using jquery
$(document).ready(function () {

});

//4.Disable/enable the form submit button
$(document).ready(function () {
    $('#checkk').click(function () {
        if ($('#btn4').is(':disabled')) {
            $('#btn4').removeAttr('disabled');
        } else {
            $('#btn4').attr('disabled', 'disabled');
        }
    });
})

//6.Blink text using jQuery
function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);

//7. Create a Zebra Stripes table effect.
$(document).ready(function () {
    $("tr:odd").addClass("style");
});

//8. Print a page using jQuery.
$(document).ready(function () {
    $(".print").click(function () {
        window.print();
    });
});

//9.Limit character input in the textarea including count
$(document).ready(function () {
    var maxLength = 25;
    $("textarea").keyup(function () {
        var len = maxLength - $(this).val().length;
        $('.aaa').text(len);
    });
});

//10. Make first word bold of all elements.
$(document).ready(function () {
    $("#btn10").click(function () {
        $(".ten p").each(function () {
            var txt = $(this);
            txt.html(txt.text().replace(/(^\w+)/, '<strong>$1</strong>'));
        });
    });
});

//12. Move one DIV element inside another using jQuery.
function moveButton(elem) {
    if ($(elem).parent().attr("id") == "nonSelected") {
        $(elem).detach().appendTo('#selected');
    }
    else {
        $(elem).detach().appendTo('#nonSelected');
    }
}


//13. Select values from a JSON object using jQuery. 
colors = { "color1": "red", "color2": "yellow", 'color3': "green" };

$.each(colors, function (key, value) {
    $('#thirteen').append($("<option/>", {
        value: key,
        text: value
    }));
});

//14. Add a list elements within an unordered list element.
$(document).ready(function () {
    $("#btn14").click(function () {
        $("ul").append("<li>five</li>");
    });
});

//15. Remove all the options of a select box and then add one option and select it.
$(document).ready(function () {
    $("#btn15").click(function () {
        $("#value15").empty().append('<option selected = "selected" value = "test">five</option>');
    });
});

//16. Underline all the words of a text using jQuery.
$(document).ready(function () {
    $("#btn111").click(function () {
        $('.sixteen p').each(function () {

            var text_words = $(this).text().split(' ');

            $(this).empty().html(function () {

                for (i = 0; i < text_words.length; i++) {
                    if (i === 0) {
                        $(this).append('<span>' + text_words[i] + '</span>');
                    } else {
                        $(this).append(' <span>' + text_words[i] + '</span>');
                    }
                }
            });
        });
    });
});

//17.How to get the value of a textbox using jQuery?
$(document).ready(function () {
    $("#seventeen").keyup(function () {
        var tvalue = $(this).val();
        // console.log(tvalue);
        alert(tvalue);
    });
})
    .keyup();

//18. Remove all CSS classes using jQuery.
$(document).ready(function () {
    $("#btn18").click(function () {
        $(".eighteen p").removeClass();
    });
});

//19. Remove style added with .css() function using jQuery.
$(document).ready(function () {
    $("#btn19").click(function () {
        $(".nineteen").css("border", 0);
    });
});

//20.Distinguish between left and right mouse click with jQuery.
$(document).on("contextmenu", ".element", function (e) {
    alert("right mouse click");
});
$(document).on('click', '.element', function () {
    alert("left mouse click");
});

//22. How to detect whether the user has pressed 'Enter Key' using jQuery.
$(document).keypress(function (keyy) {
    if (keyy.which == 13) {
        alert("you pressed Enter");
    };
});

//23. Count number of rows and columns in a table using jQuery.
$(document).ready(function () {
    $("#btn88").click(function () {
        var rows = $('#tablel tr').length;
        var columns = $("#tablel th").length;
        console.log("no of row is " + rows + " & no of column is " + columns);
    });
});

//24.How to get textarea text using jQuery
$(document).ready(function () {
    $("#btn24").click(function () {
        var text = $('#area1').val();
        alert(text);
    });
});

//25. Access form input fields using jQuery.
$(document).ready(function () {
    $("#myForm").submit(function () {
        var values = $(this).serialize();
        alert(values);
    });
});

//26.Find the absolute position of an element using jQuery
$(document).ready(function () {
    $("#btn26").click(function () {
        var leftPosition = $("#text26").offset().left - $(document).scrollTop();
        var rightPosition = $("#text26").offset().top - $(document).scrollTop();
        alert(' Left : ' + leftPosition + ' Right : ' + rightPosition);
    });
});

//27.Convert a jQuery object into a string.
$(document).ready(function () {
    var elem = $('<h1>', {
        text: "yash",
        class: "test",
    });
    $("#twentySeven").text(elem.get(0).outerHTML);
});

//28. How to detect a textbox's content has changed using jQuery?
$(document).ready(function () {
    $("#fname").on('input', function () {
        $("#twentyEight").text("New First Name Added");
    });
});

//29.Remove a specific value from an array using jQuery
$(document).ready(function () {
    var fruit = ["apple", "banana", "mango", "watermallen"];
    var removeValue = "mango";
    $("#btn29").click(function () {
        fruit.splice($.inArray(removeValue, fruit), 1);
        alert(fruit);
    });
});

//30. Change button text using jQuery.
$(document).ready(function () {
    $("#btn30").val("ok");
});

//31. Add options to a drop-down list using jQuery.
$(document).ready(function () {
    var myOption = {
        val1: "blue",
        val2: "green"
    };
    var mySelect = $("#myColor");
    $.each(myOption, function (val, text) {
        mySelect.append(
            $('<option></option>').val(val).html(text)
        );
    });
});

//32. Set background-image using jQuery CSS property.
$(document).ready(function() {
        $("body").css('background-image', 'url("./image2.jpg")');
});


//33. Delete all table rows except first one using jQuery.
$(document).ready(function () {
    $("#btn33").click(function () {
        $("#thirtyThree").find("tr:gt(0)").remove();
    });
});

//34. How to get the selected value and currently selected text of a dropdown box using jQuery?
$(document).ready(function () {
    $("#btn34").click(function () {
        var store = $("#op2").val();
        var store1 = $('#op4').val();
        var store2 = $('#ddid :selected').text();
        $("#thirtyFour").append(store + " " + store1 + " " + store2 + " ");
    });
});

//35.Disable a link using jQuery.
$(document).ready(function () {
    $("#btn35").click(function () {
        $("a").removeAttr('href');
    });
});

//36. Change a CSS class using jQuery.
$(document).ready(function () {
    $("#btn36").click(function () {
        $(".thirtySix p").removeClass('st36').addClass('st236');
    });
});

//37. Add a CSS class using jQuery. 
$(document).ready(function () {
    $("#btn37").click(function () {
        $(".thirtySeven p").addClass('st236');
    });
});

//38. Count child elements using jQuery.
$(document).ready(function () {
    $("#btn38").click(function () {
        var count = $("#selected p").length;
        alert(count);
    });
});

//39. Restrict "number"-only input for textboxes including decimal points.
$(document).ready(function () {
    $("#number").keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });
});

//40. Find the loaded jQuery version.
$(document).ready(function () {
    $("#btn40").click(function () {
        if (typeof jquery != undefined) {
            alert(jQuery.fn.jquery);
        };
    });
});

//41. Remove a specific table row using jQuery.
$(document).ready(function () {
    $("#btn41").click(function () {
        $("#tr3").remove();
    });
});

//42. Set value in input text using jQuery.
$(document).ready(function () {
    $("#btn42").click(function () {
        $("#fortyTwo").val("Patel Yash");
    });
});

//43. Set a value in a span using jQuery.
$(document).ready(function () {
    $('#btn43').click(function () {
        $("#spanid").html(" How Are You");
    });
});

//44. Find the class of the clicked element.
$(document).ready(function () {
    $(".unorderList li").click(function () {
        var colorClasss = this.className;
        alert(colorClasss);
    });
});

//45.Set href attribute at runtime using jquery.
$(document).ready(function () {
    $("#btn45").click(function () {
        $("#map").attr("href", "https://www.wikipedia.org/");
    });
});

//46. Remove disabled attribute using jQuery. 
$(document).ready(function () {
    $("#btn46").click(function () {
        $(".disable").prop("disabled", false);
    });
});

//47. Find the total width of an element (including width, padding, and border) in jQuery.
$(document).ready(function () {
    $("#btn47").click(function () {
        var store = $(".total").outerWidth();
        alert("width + padding + border : " + store);
    });
});

//48. Change options of select using jQuery.

var option = $('<select></select>').attr("red", "orange").text("orange");
$("#c3").empty().append(option);

//49. Access HTML form data using jQuery.
$(document).ready(function () {
    $("#btn49").click(function () {
        alert($("form").serialize());
    });
});

//50. Add attribute using jQuery.
$(document).ready(function () {
    $("#btn50").click(function () {
        $("#fifty").prop("value", "Enter your Full name")
    })
})