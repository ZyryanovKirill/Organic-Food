$(document).ready(function () {
	$(".custormer-starts").starRating({
  initialRating: 5,
  strokeColor: '#F1B90B',
  rateColor: '#F1B90B',
  strokeWidth: 10,
  starSize: 23,
  readOnly: true,
  strokeWidth: 20
});

$(".custormers-slider").slick({
    infinite: true,
    slidersToShow: 1,
    slidersToScroll: 1,
    prevArrow: '<button class="btn slider-btn slider-prev"></button>',
    nextArrow: '<button class="btn slider-btn slider-next active"></button>',
      responsive: [
    {
      breakpoint: 981,
      settings: {
        arrows: false,
        dots: true
      }
    },
  ]
});

    $('.slider-btn').click(function(){
        $('.slider-btn').removeClass("active");
        $(this).addClass("active")
    })

    $('.burger').click(function(){
        $('.burger').toggleClass("active");
        $(".nav").toggleClass("active");
        $("body").toggleClass("hidden");
    })

});
