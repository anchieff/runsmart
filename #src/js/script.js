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

  // Modal =======================================================================
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, .modal').fadeOut();
  });

  $('.button_catalog').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  // Validation ====================================================================
  function formValide(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }     
      },
      messages: {
        name: "Пожалуйста, введите ваше имя",
        phone: "Пожалуйста, введите ваш телефон",
        email: {
          required: "Пожалуйста, введите вашу почту",
          email: "Ваша почта должна быть в формате name@domain.com"
        }
      }
    });
  }

  formValide('#consultation-form');
  formValide('#consultation form');
  formValide('#order form');

  // Phone mask ==================================================================
  @@include('jquery.maskedinput.min.js');
  
  $("input[name=phone]").mask("+7 (999) 999-99-99");

  // Smooth scroll and page up ==================================================
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

});





