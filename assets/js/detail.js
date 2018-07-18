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

}
