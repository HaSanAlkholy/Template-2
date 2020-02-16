$(document).ready(function(){
    $('.team-body').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed :600,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
  });
      