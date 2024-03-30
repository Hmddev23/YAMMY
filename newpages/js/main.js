document.addEventListener('DOMContentLoaded', function() {
  let swiperCards = new Swiper('.card-container.swiper', {
      loop: true,
      spaceBetween: 10, // Adjust this value to control the gap between items
      slidesPerView: 3, // Adjust this value to control the number of items per view
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        // Adjust bullet position to be at the bottom
        bulletElement: 'span', // Customize bullet element
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

});
