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

$('.slider2').slick({
  slidesToShow: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  
});

$('.contact-button').click(function(){
  $('.popup').show();
})
$('.close').click(function(){
  $('.popup').hide();
})

$('.follow-btn').click(function(){
  $('.modal-menu').toggleClass('active');
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".popup-content"); 
    var div2 = $(".popup");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.hide();

    }
  });
});

  $(".leng-tab").click(function() {
  $(".leng-tab").removeClass("active").eq($(this).index()).addClass("active");
 
}).eq(0).addClass("active");

});

 $('[data-fancybox="gallery1"]').fancybox({
  transitionEffect: "fade",
  transitionDuration: 0,

});