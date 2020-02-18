$(document).ready(function () {

//+++++++++++++++++++++++++++++++++++++++++++
//     Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++     

$('.slider-service').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrow:true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

$('.slider-service1').slick({
  dots: true,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.client-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 
////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // speed: 1000,
  // autoplay: true,
  // autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
}); 
////// gallery slider end

   


 AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       var spanWidth = $('#text span').width();
       $('#text').animate( { width: spanWidth }, 9000 );
    }
    else {
       var spanWidth = $('#text span').width();
       $('#text').animate( { width: spanWidth }, 9000 );
    }
});
});