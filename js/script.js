$('.slider').slick({
    dots: true,
    slidesToScroll: 1,
    dotsClass: "dotsClass_slider-2",
    centerMode: true,
    centerPadding: '5vw',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 1070,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '5vw',
                slidesToShow: 1
            }
        }
    ]
});

$( ".page_1" ).on( "click", ".butt_txt_vis", function() {
    if ( $(".ico_butt_txt_vis").hasClass("ico_butt_txt_vis_focus") ) {
        $('.ico_butt_txt_vis').toggleClass('ico_butt_txt_vis_focus');
        $('.about_txt_none').css('display', 'none');
        document.getElementById('butt_txt_id').innerHTML = "Подробнее"
    } else {
        $('.ico_butt_txt_vis').toggleClass('ico_butt_txt_vis_focus');
        $('.about_txt_none').css('display', 'block');
        document.getElementById('butt_txt_id').innerHTML = "Свернуть"
    }
});

$( ".header" ).on( "click", ".log", function() {
    
    $('.bc_ex').toggleClass('bc_ex_focus');

    setTimeout(() => { 
        $('.log_in').toggleClass('log_in_focus');
    }, 400);

    var top = $(window).scrollTop();
    var left = $(window).scrollLeft()

    $(window).scroll(function(){
        $(this).scrollTop(top).scrollLeft(left); 
    });
});

$( ".header" ).on( "click", ".button_catalog", function() {

    $('.bc_ex').toggleClass('bc_ex_focus');

    setTimeout(() => { 
        $('.menu_site').toggleClass('menu_site_focus');
    }, 400);

    var top = $(window).scrollTop();
    var left = $(window).scrollLeft()

    $(window).scroll(function(){
        $(this).scrollTop(top).scrollLeft(left); 
    });
});

$( "body" ).on( "click", ".bc_ex", function() {
    
    $(window).unbind('scroll');

    $('.log_in_focus').css('animation-name', 'off_login');

    setTimeout(() => { 
        $('.log_in').removeClass('log_in_focus');
    }, 400);

    $('.menu_site').css('animation-name', 'off_menu');

    setTimeout(() => { 
        $('.menu_site').removeClass('menu_site_focus');
    }, 250);

    setTimeout(() => { 
        $('.bc_ex').css('animation-name', 'off_modal');
        setTimeout(() => { 
            $('.bc_ex').removeClass('bc_ex_focus');
            $('.bc_ex').css('animation-name', 'on_modal');
            $('.log_in').css('animation-name', 'on_login');
            $('.menu_site').css('animation-name', 'on_menu');
        }, 250);
     }, 400);
});

$( ".log_in" ).on( "click", ".new_password_1", function() {

    var height = $('.log_in').height();
    console.log(height)
    $('.log_in').css('height', height);

    $('.mail_act_1').removeClass('mail_on');
    $('.mail_act_1').addClass('mail_off');

    setTimeout(() => { 
        $('.mail_act_1').addClass('disp_none');
        $('.mail_act_2').removeClass('disp_none');
        $('.mail_act_2').removeClass('mail_off');
        $('.mail_act_2').addClass('mail_on');
        $('.log_in').css('height', 'auto');
     }, 400);

});

$( ".log_in" ).on( "click", ".new_password_2", function() {

    $('.mail_act_2').removeClass('mail_on');
    $('.mail_act_2').addClass('mail_off');

    setTimeout(() => { 
        $('.mail_act_2').addClass('disp_none');
        $('.mail_act_1').removeClass('disp_none');
        $('.mail_act_1').removeClass('mail_off');
        $('.mail_act_1').addClass('mail_on');
     }, 400);
    
});

