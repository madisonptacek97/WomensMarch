//These are just some common uses for jQuery in basic UI/UX.
//Modify them to best fit your project.


//Add/Remove Class

$('.AddRemove').click(function () {
    if ($('.Thing').hasClass('ClassName')) {
        $('target, .class').removeClass('ClassName');
    } else {
        $('.TargetClass').addClass('ClassName');
        // Optional Sibling Class Removal
        //$( .TargetClass ).addClass( 'ClassName' ).siblings('.ClassName').removeClass('ClassName');
    }
});


//Toggle Class

$('.Toggle').click(function () {
    $( .Thing ).toggleClass( 'ClassName' );
});


//Scroll to Top of Page

$('.ScrollTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
});