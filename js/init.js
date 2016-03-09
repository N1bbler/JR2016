(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
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
  });

// shrink header on scroll
$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 100){
      $("nav").addClass("shrink");
      $("#index-banner").addClass("shrink-lax");
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
