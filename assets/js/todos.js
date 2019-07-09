// check off specific totos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropogation();
});

// add new Todo when [ENTER] key is pressed
$("input[type=text]").keypress(function(event) {
    if (event.which === 13){
        // get new Todo text from inputbox
        var todoText = $(this).val();
        $(this).val("")
        // add new LI to UL
        $("ul").append(`<li><span><i class='far fa-trash-alt'></i></span> ${todoText}</li>`);
    }
});

// hide inputbox when plus icon clicked
$(".fa-plus").click(function() {
    $("input[type=text]").fadeToggle();
});