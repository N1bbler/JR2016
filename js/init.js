$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    // smooth scrolling
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 85
	    }, 900, 'swing');
	});
    // slider
    $('.slider').slider({full_width: true, height:640});
    // JR's custom scripts
    $('#index-banner h5').delay(1000).animate({fontSize: '44px'}, 300);
    $('.icon-block img:eq(0)').delay(3000).animate({height: '150px'}, 300).delay(1000).animate({height: '125px'}, 300);
    $('.icon-block h5:eq(0)').delay(3000).animate({fontSize: '2rem'}, 300);   
    $('.icon-block img:eq(1)').delay(5000).animate({height: '150px'}, 300).delay(1000).animate({height: '125px'}, 300);
    $('.icon-block h5:eq(1)').delay(5000).animate({fontSize: '2rem'}, 300);     
    $('.icon-block img:eq(2)').delay(7000).animate({height: '150px'}, 300).delay(1000).animate({height: '125px'}, 300);
    $('.icon-block h5:eq(2)').delay(7000).animate({fontSize: '2rem'}, 300); 
  });

// shrink header on scroll
$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 100){
      $("nav").addClass("shrink");
      $("#index-banner").addClass("shrink-lax");
      $('#index-banner h5').animate({fontSize: '30px'}, 300);
    }
    else
    {
        $("nav").removeClass("shrink");
        $("#index-banner").removeClass("shrink-lax");
    }
});


function sendEmail() 
{
    location.href = "mailto:riddledesignworks@gmail.com";
}
function skypeMe() 
{
    location.href = "skype:riddle.j?chat";
}
function getDoc() 
{
    location.href = "Jason_Riddle_resume_2016.docx";
}
function getPDF() 
{
    location.href = "Jason_Riddle_resume_2016.pdf";
}
