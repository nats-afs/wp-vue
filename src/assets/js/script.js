$(document).ready(function () {
  
  
  $('section#carousel .carousel.carousel-slider').carousel({fullWidth: true, indicators:true});
  
  $('.carousel').carousel({fullWidth: true,dist:0, shift:0, padding:20});
  
  
  $('.news-nav-left').on('click', function(){
    $('.news-content .carousel').carousel('prev');
  })
  
  $('.news-nav-right').on('click', function(){
    $('.news-content .carousel').carousel('next');
  })
  
  $(".button-collapse").sideNav();
  $('.parallax').parallax();

  $('header nav .nav-wrapper .dropdown-button').dropdown({
        // inDuration: 300,
        // outDuration: 225,
        // constrainWidth: false, // Does not change width of dropdown to that of the activator
        // hover: true, // Activate on hover
        // gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        // alignment: 'left', // Displays dropdown with edge aligned to the left of button
        // stopPropagation: false // Stops event propagation
      }
    );
  
  $('.navbar-main .dropdown-button').dropdown({
        hover: true, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
      }
    );
  });
