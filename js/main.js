$(function(){

  $('.works__slider-inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.references__slider-inner').slick({
    prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/arrow_left.svg" alt="left arrow"></button>',
    nextArrow: '<button class="slick-arrow arrow-next"><img src="images/arrow_right.svg" alt="next arrow"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
  });


  $('.burger').on('click', function(){
    $('.nav__list').toggleClass('active');
  });

  $('.burger').on('click', function(){
    $('.burger__item').toggleClass('color');
  });

});