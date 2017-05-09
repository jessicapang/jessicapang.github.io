$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

  $('.number').mouseleave(function() {
    $('.footnote').removeClass('showme');
  });




  $('.blueheader').mouseenter(function() {
      $('.redheader').addClass('hide');
    });

    $('.blueheader').mouseleave(function() {
      $('.redheader').removeClass('hide');
    });


});
