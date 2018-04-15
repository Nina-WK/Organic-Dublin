$(document).ready(function(){
    var div = $('#first,#second,#third,#fourth,#fifth');
    $('#first').delay(500).fadeIn("slow");
    $('#second').delay(1500).fadeIn("slow");
    $('#third').delay(2500).fadeIn("slow");
    $('#fourth').delay(3500).fadeIn("slow");
    $('#fifth').delay(4500).fadeIn("slow"); 
});

function formSubmission() {
    alert("Your form has been submitted successfully! We will be in touch shortly. Thank you");
}

$('.dropdown').on('mouseenter mouseleave tap', function() {
    $(this).toggleClass('open'); 
});

function checkWidth() {
    var windowSize = $(window).width();
        if (windowSize <= 800) {
            $('.overlay').hide();
        }
        else {
            $('.overlay').show().on('click tap');
        }
};