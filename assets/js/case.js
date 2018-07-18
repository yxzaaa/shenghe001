var html='';
for(var i=0;i<caseDetails.length;i++){
    html += '<li class="col-md-3 col-sm-6 col-xs-12">';
    html += '<img src="'+caseDetails[i].img+'" alt="case">';
    html += '<div class="show-link">';
    html += '<span>'+caseDetails[i].title+'</span><a href="./case-detail.html?kind=case&id='+i+'">了解详情</a>';
    html += '</div></li>';
}
$('#caseList').html(html);