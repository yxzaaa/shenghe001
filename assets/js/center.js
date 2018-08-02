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
function fillPros(kind){
    var proHtml = '';
    for(var i=0;i<products.length;i++){
        if(products[i].kind == kind){
            proHtml += "<li class='col-md-3 col-sm-6 col-xs-12'><a href='javascript:;'><img src='"+products[i].img+"' alt='product'><p>"+products[i].name+"</p></a></li>";
        }
    }
    $('#kindPro').html(proHtml);
}
fillPros('埋弧焊丝');
$('.kind-list li').click(function(){
    $('#kindPro').html("");
    fillPros($(this).html());
})