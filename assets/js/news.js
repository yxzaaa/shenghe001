var newHtml = '';
for(var i=0;i<newDetails.length;i++){
    newHtml +=  "<li class='col-md-3 col-sm-6 col-xs-6'>";
    newHtml +=  "<div class='show-detail'><h5>"+newDetails[i].subTitle+"</h5>";
    newHtml +=  "<div><span class='glyphicon glyphicon-thumbs-up'>&nbsp;"+newDetails[i].count+"</span>";
    newHtml +=  "<span class='glyphicon glyphicon-calendar'>&nbsp;"+newDetails[i].time+"</span></div></div>";
    newHtml +=  "<img src='"+newDetails[i].img+"' alt='news'>";
    newHtml +=  "<div class='show-link'><span>"+newDetails[i].title+"</span>";
    newHtml +=  "<a href='./new-detail.html?kind=new&id="+i+"'>新闻详情</a></div></li>";
}
$('#newList').html(newHtml);