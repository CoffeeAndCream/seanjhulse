$(document).on('turbolinks:load', function() {
  $(".language").hover(
    function(){
      var element = $(this);
      element.addClass('animated bounce');
      element.next('.language-description').fadeIn();
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
          element.fadeOut();
        } else {
          element.mouseout(function() {
            element.fadeOut();
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
  $(".section-header").click(
    function(){
      var element = $(this).next(".section-container");
      slideshow = element.children('.col-lg-8').children('.slideshow');
      slideshow.toggle();
      element.slideToggle();
      slideshow.slick('unslick');

      slideshow.slick({
        arrows: false,
        autoplay: true,
        focusOnSelect: true,
        autoplaySpeed: 2000
      });
    }
  )
});
$(document).on('turbolinks:load', function() {
  $('.slideshow').slick({
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 2000
  });
});
