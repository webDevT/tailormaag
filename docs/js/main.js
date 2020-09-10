$(function(){


$("#top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

$(window).scroll(function() {
if ($(this).scrollTop() > 100){
$('.scroll-top').fadeIn();
}
else{
$('.scroll-top').fadeOut();
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 400){
$('#cd-nav').show();
}
else{
$('#cd-nav').hide();
}
});

$('#cd-nav').toggleClass('active');

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

$('.cd-nav-trigger').click(function(){
$('#cd-nav').toggleClass('active');
  
  $(this).toggleClass('active');
})


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

  jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "menu" link is shown
  var offset = 300;

  var navigationContainer = $('#cd-nav'),
    mainNavigation = navigationContainer.find('#cd-main-nav ul');

  //hide or show the "menu" link
  checkMenu();
  $(window).scroll(function(){
    checkMenu();
  });

  //open or close the menu clicking on the bottom "menu" link
  $('.cd-nav-trigger').on('click', function(){
    $(this).toggleClass('menu-is-open');
    //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
    mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

  });

  function checkMenu() {
    if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
      navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        mainNavigation.addClass('has-transitions');
      });
    } else if ($(window).scrollTop() <= offset) {
      //check if the menu is open when scrolling up
      if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
        //close the menu with animation
        mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //wait for the menu to be closed and do the rest
          mainNavigation.removeClass('is-visible is-hidden has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
        });
      //check if the menu is open when scrolling up - fallback if transitions are not supported
      } else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
          mainNavigation.removeClass('is-visible has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
      //scrolling up with menu closed
      } else {
        navigationContainer.removeClass('is-fixed');
        mainNavigation.removeClass('has-transitions');
      }
    } 
  }
  
    if( $('.cd-stretchy-nav').length > 0 ) {
    var stretchyNavs = $('.cd-stretchy-nav');
    
    stretchyNavs.each(function(){
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
      
      stretchyNavTrigger.on('click', function(event){
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function(event){
      ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
    });
  }
  
  
});

