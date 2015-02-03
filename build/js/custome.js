
jQuery(document).ready(function ($) {
    var $homepageSlider = $('#slider').unslider({
        speed: 800,
        delay: 5000,
        keys: true,
        dots: true,
        fluid: false
    });
    var data = $homepageSlider.data('unslider');

    $('.unslider-arrow').click(function (event) {
        event.preventDefault(); // avoid scrolling to the top of screen

        var classes = this.className.split(' ');
        var fn = classes[classes.length - 1]; // get the last class name that
        // specifies the operation

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        data[ fn]();
    });
    
    $('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 103
    }, 800);
    event.preventDefault();
});

});