var query = window.location.search.split('?')[1].split('&');
var queryObj = {};
for(var i=0;i<query.length;i++){
    var key = query[i].split('=')[0];
    var val = query[i].split('=')[1];
    queryObj[key] = val;
}
console.log(queryObj);
if(queryObj.kind == 'case'){
    $('.detail-title').html(caseDetails[queryObj.id].title);
    $('.detail-img img').attr('src',caseDetails[queryObj.id].img);
}else if(queryObj.kind == 'new'){
    $('.news-box-title').html(newDetails[queryObj.id].title);
    $('.news-box-date').html(newDetails[queryObj.id].time);
    var len = newDetails[queryObj.id].content.length;
    var contentHtml = '';
    for(var i=0;i<len;i++){
        contentHtml += '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+newDetails[queryObj.id].content[i]+'</p>';
    }
    $('.news-box-content').html(contentHtml);
}
