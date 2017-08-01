$(document).on('turbolinks:load', function() {
  $(".language").hover(
    function(){
      var element = $(this);
      element.addClass('animated bounce');
      element.next('.language-description').fadeIn();
      element.next('.language-description').removeClass('animated zoomOut');
      setTimeout(function(){
        element.removeClass('animated bounce');
      }, 1000);
    },
    function(){
      //mouse exits language icon
      var element = $(this).next('.language-description');

      //timeout function checks if user is closely reading description (hovering over)
      setTimeout(function() {
        if(element.is(':hover') === false){
          element.addClass('animated zoomOut');
        } else {
          element.mouseout(function() {
            element.addClass('animated zoomOut');
          })
        }
      }, 2000);
    }
  );
  $(".close").click(
    function(){
      $(this).parent().fadeOut();
    }
  );
});
$(document).on('turbolinks:load', function() {
  $('.slideshow').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
