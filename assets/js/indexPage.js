var bannerHtml = '';
var proHtml = '';
var caseHtml = '';
var newHtml = '';

for(let i=0;i<banners.length;i++){
    bannerHtml += '<li><a href="#"><img src="'+banners[i].img+'" alt="1"></a></li>';
}
for(let i=0;i<products.length;i++){
    if(i<4){
        proHtml += "<li class='col-md-3 col-sm-6 col-xs-12'><a href='./center.html'><img src='"+products[i].img+"' alt='product'><p>"+products[i].name+"</p></a></li>";
    }
}
for(let i=0;i<caseDetails.length;i++){
    if(i<4){
        caseHtml += "<li class='col-md-3 col-sm-6 col-xs-12'><img src='"+caseDetails[i].img+"' alt='case'>";
        caseHtml += "<div class='show-link'><span>"+caseDetails[i].title+"</span><a href='./case.html'>了解更多</a></div></li>";
    }
}
for(let i=0;i<newDetails.length;i++){
    if(i<2){
        newHtml += "<li><img src='"+newDetails[i].img+"' alt='new'>";
        newHtml += "<div class='show-link'><span>"+newDetails[i].title+"</span><a href='./news.html'>查看更多</a></div></li>";
    }
}
$('#slider').html(bannerHtml);
$('#expPro').html(proHtml);
$('#expCase').html(caseHtml);
$('#expNew').html(newHtml);