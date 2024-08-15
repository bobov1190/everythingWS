$(document).ready(function() {
    $("body").children().each(function() {
        $(this).html($(this).html().replace(/&#8232 ;/g," ")); // remove the space in front of the first semicolon!
    });
});