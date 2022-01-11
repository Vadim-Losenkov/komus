$(function() {
  $('.popup-opener').magnificPopup({
    type: 'inline',
    showCloseBtn: false,
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function() {
        $('.table-popup__slider').slick({})
      },
      close: function() {
        $('.table-popup__slider').slick('unslick')
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  })
  
  $('[data-popup="rate"]').rateYo({
    readOnly: true,
    ratedFill: "#fda700",
    normalFill: "#c4c4c4",
    starWidth: "12px"
  })
  
  $('[data-popup="faq"]').on('click', function() {
    $(this).toggleClass('open')
    $(this).siblings('.faq-popup__item-text').slideToggle(300)
  })
  
  $('#close-popup').on('click', () => {
    $('.popup-opener').magnificPopup('close')
  })
  $('.table-popup__info-name').on('click', function() {
    $(this).children('.custom-checkbox').toggleClass('active')
  })
})
