$('.kind-list ul').on('click','li',function(){
    var that = $(this);
    if(!that.hasClass('active')){
        $.ajax({
            url:'',
            dataType:'json',
            type:'GET',
            timeout:50000,
            success:function(res){

            },
            error:function(){

            }
        })
        that.siblings().removeClass('active');
        that.addClass('active');
        $('.item-name h5').html('<span class="glyphicon glyphicon-align-right"></span>'+that.html());
    }
})