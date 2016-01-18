(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
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
    location.href = "Jason_Riddle_resume_2015.doc";
}