// =========== swiper card =========

var swiper = new Swiper(".services-slider", {
  // spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  
});
