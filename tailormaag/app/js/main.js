$(function(){

$('.slider').slick({
	slidesToShow: 3,
	centerMode: true,
  	centerPadding: '16vw',
  	arrows: false,
  	responsive: [
    {
      breakpoint: 992,
      settings: {     
        centerMode: true,
        centerPadding: '20vw',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '20vw',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        centerPadding: '22vw',
        slidesToShow: 1
      }
    }
  ]
});


});