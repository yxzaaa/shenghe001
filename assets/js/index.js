$(document).ready(function(){
    $('.icon-toggle').click(function(){
        if($('.com-nav').hasClass('show')){
            $('.com-nav').removeClass('show');
        }else{
            $('.com-nav').addClass('show');
        }
    })
    $('[data-ac=active]').addClass('active');
})
$(window).scroll(function(){
    var HEIGHT = $('.com-head-logo').height() + 2*parseInt($('.com-head-logo').css('padding'));
    if($(window).scrollTop() >= 5){
        $('.nav-box').addClass('nav-fixed');
        $('.nav-box').css('transform','translateY(-'+HEIGHT+'px)');
        $('.com-head-name').height(42);
        $('.page-box').css('margin-top',$('.nav-box').height());
        $('.icon-toggle').css('top',58);
    }else{
        $('.nav-box').removeClass('nav-fixed');
        $('.nav-box').css('transform','translateY(0px)');
        $('.com-head-name').height(0);
        $('.page-box').css('margin-top',0);
        $('.icon-toggle').css('top',10);
    }
})