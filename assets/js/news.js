var newHtml = '';
for(let i=0;i<newDetails.length;i++){
    if(i<2){
        newHtml += `<li class='col-md-3 col-sm-6 col-xs-12'>
            <div class='show-detail'>
                <h5>${newDetails[i].subTitle}</h5>
                <div>
                    <span class='glyphicon glyphicon-thumbs-up'>&nbsp;${newDetails[i].count}</span>
                    <span class='glyphicon glyphicon-calendar'>&nbsp;${newDetails[i].time}</span>
                </div>
            </div>
            <img src="${newDetails[i].img}" alt="news">
            <div class='show-link'>
                <span>${newDetails[i].title}</span>
                <a href="./new-detail.html?kind=new&id=${i}">新闻详情</a>
            </div>
        </li>`;
    }
}
$('#newList').html(newHtml);