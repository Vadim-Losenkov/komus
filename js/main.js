// const $wrapper = document.querySelector('[data-academy]')
// const $items = $wrapper.querySelectorAll('[data-academy-item]')

// let counter = 0

// let inner = document.createElement('div')
// inner.classList.add('parent__inner')
// // console.log(inner);
// $wrapper.insertAdjacentElement('beforeend', inner)

// $items.forEach(($item, idx) => {
//   $item.setAttribute('data-academy-item', counter)
//   $item.setAttribute('id', `academy-${idx}`)


//   if (counter < 4) {
//     counter += 1
//     $item.classList.add(`div${counter + 1}`)
//     inner.insertAdjacentElement('beforeend', $item)
//   } else {
//     counter = 0

//     inner = document.createElement('div')
//     inner.classList.add('parent__inner')
//     $wrapper.insertAdjacentElement('beforeend', inner)

//     $item.classList.add(`div${counter + 1}`)
//     inner.insertAdjacentElement('beforeend', $item)
//   }
// })


$(function() {
  $('.p').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  })
})