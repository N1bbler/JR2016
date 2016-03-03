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
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
    // slider
    $('.slider').slider({full_width: true, height:640});
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
    location.href = "jr_resume_2016.docx";
}