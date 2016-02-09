jQuery(function($) {
    // makes the text slide up and down
    $('.toggle-text').on('click', function(event) {
        // this means, prevent the default action the browser will take when you click the link (which is to go to the url specified in the "href")
        event.preventDefault();
        $('.intro-copy').slideToggle();
    });

    $('.open-modal').on('click', function(event) {
        event.preventDefault();
        $('.ui-block').show();
        $('.modal').fadeIn();
    });

    $('.modal button').on('click', function(event) {
        event.preventDefault();
        $('.ui-block').hide();
        $('.modal').fadeOut();
    });
});
