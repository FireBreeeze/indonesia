$(function(){
   $('.about__slider').slick({
        dots: false,
        arrows: true,
        autoplaySpeed: 1000,
        prevArrow: '<div class="about-arrow about-arrow--prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4187 4.3938L8.8125 15L19.4187 25.6063L21.1875 23.8388L12.3475 15L21.1875 6.1613L19.4187 4.3938Z" fill="white"/></svg></div>',
        nextArrow: '<div class="about-arrow about-arrow--next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5813 25.6062L21.1875 15L10.5813 4.3937L8.8125 6.1612L17.6525 15L8.8125 23.8387L10.5813 25.6062Z" fill="white"/></svg></div>',
    });

    $window = $(window);
    $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#information') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#about') {
      scrollPoint = scrollPoint - 65;
    }

    if(scrollAnchor === '#culture') {
      scrollPoint = scrollPoint - 65;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });
});