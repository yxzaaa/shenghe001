$(document).ready(function(){
    $('.icon-toggle').click(function(){
        if($('.com-nav').hasClass('show')){
            $('.com-nav').removeClass('show');
        }else{
            $('.com-nav').addClass('show');
        }
    })
    $('[data-ac=active]').addClass('active');
    $('.fixed-info>p').css('line-height', $('.com-head-logo').height() + 'px');
    $('.fixed-info>h4').css('line-height', $('.com-head-logo').height() + 'px');
})
$(window).scroll(function(){
    var HEIGHT = $('.com-head-logo').height() + 2*parseInt($('.com-head-logo').css('padding-top'));
    if($(window).scrollTop() >= 50){
        $('.nav-box').addClass('nav-fixed');
        $('.nav-box').css('transform','translateY(-'+HEIGHT+'px)');
        $('.com-head-name').height(42);
        $('.page-box').css('margin-top',$('.nav-box').height()-HEIGHT);
        $('.icon-toggle').css('top', 58);
        $('.fixed-info>p').css('line-height', '18px');
        $('.fixed-info>h4').css('line-height', '18px');
    }else{
        $('.nav-box').removeClass('nav-fixed');
        $('.nav-box').css('transform','translateY(0px)');
        $('.com-head-name').height(0);
        $('.page-box').css('margin-top',0);
        $('.icon-toggle').css('top', 12);
        $('.fixed-info>p').css('line-height', $('.com-head-logo').height() + 'px');
        $('.fixed-info>h4').css('line-height', $('.com-head-logo').height() + 'px');
    }
})
function linkTo(link){
    window.open(link,'_self');
}