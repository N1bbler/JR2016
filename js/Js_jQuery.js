$(document).ready(function(){
    
// basic selectors
//$('.icon-block img').css('border', '4px solid red');
    
// basic animations
//$('.icon-block img').show(500).fadeIn(500);
//$('.icon-block img').animate({height: '200px'}, 300);  
    
// index filters
//$('.icon-block img:eq(2)').css('border', '4px solid red');
    
// relationship filters
//$('.icon-block:parent').css('border', '4px solid red');
//$('.icon-block:has(img)').css('border', '4px solid red');
    
// attribute filters
//$('a[href$=".com"]').css('border', '4px solid red');  
    
// combo script
$('#index-banner h5').delay(1000).animate({fontSize: '44px'}, 300);
$('.icon-block img:eq(0)').delay(3000).animate({height: '150px'}, 300).delay(1000).animate({height: '125px'}, 300);
$('.icon-block h5:eq(0)').delay(3000).animate({fontSize: '2rem'}, 300);   
$('.icon-block img:eq(1)').delay(5000).animate({height: '150px'}, 300).delay(1000).animate({height: '125px'}, 300);
$('.icon-block h5:eq(1)').delay(5000).animate({fontSize: '2rem'}, 300);     
$('.icon-block img:eq(2)').delay(7000).animate({height: '150px'}, 300).delay(1000).animate({height: '125px'}, 300);
$('.icon-block h5:eq(2)').delay(7000).animate({fontSize: '2rem'}, 300); 
});