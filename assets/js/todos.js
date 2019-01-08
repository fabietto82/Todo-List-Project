

$('ul').on('click' , 'li' , function () {
    $(this).toggleClass('completed');
});

// click on trash to delete items...
$('ul').on('click' , 'span' ,function (event) {
    $(this).parent().fadeOut(1000 , function () {
        $(this).remove();
    });
    event.stopPropagation();

});

// add a new todoItems to my list...
$('input[type="text"]').keypress(function (event) {
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $('ul').append("<li> <span><i class=\"fa fa-trash\"></i></span> " + todo + "</li>");
    }
});

$('.fa-plus').on('click' , function () {
    $('input[type="text"]').fadeToggle(600);
})
