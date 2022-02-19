const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    breakpointsBase: 'container',
    //effect:'cube',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    mousewheel: {
      invert: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});


const MainSwiper = new MainSwiper('.swiper-container', {
  // // Optional parameters
  // // direction: 'vertical',
  // loop: true,
  // //breakpointsBase: 'container',
  // effect:'fade',


  // // effect: 'fade',
  // // fadeEffect: {
  // //   crossFade: true
  // // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // mousewheel: {
  //   invert: false,
  // },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },

});
