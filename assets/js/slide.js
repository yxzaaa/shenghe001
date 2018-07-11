//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').mouseover(
		function(){ $(this).addClass('active'); clearInterval(autoSlider); }
	);
	$('#slider-wrap').mouseout(
		function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});//DOCUMENT READY
	
$(window).resize(function(){
	$('#slider-wrap ul#slider').width($('#slider-wrap').width()*totalSlides);
})

/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -($('#slider-wrap').width()*pos)); 	
	
	//*> optional
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -($('#slider-wrap').width()*pos)); 
	
	//*> optional 
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}