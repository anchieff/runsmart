window.addEventListener('DOMContentLoaded', function(){
  // Слайдер ==========================================================
  const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });
  
  document.querySelector('.slide_prev').addEventListener('click', () => slider.goTo('prev'));
  
  document.querySelector('.slide_right').addEventListener('click', () => slider.goTo('next'));


  //Табы ===============================================================
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  // Инфо в карточках ===================================================
  function toggle(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggle('.catalog-item__link');
  toggle('.catalog-item__back');




});




