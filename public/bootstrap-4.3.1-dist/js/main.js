
    $(window).on('load', function () {
     /*==========================================================
             prelaoder
    ======================================================================*/
    $('#preloader').addClass('loaded');

     // preloader close
     $('.cancel-preloader').on('click', function (e) {
        e.preventDefault();
        if (!($('#preloader').hasClass('loaded'))) {
            $('#preloader').addClass('loaded');
        }
    })
    
    

})(jQuery);