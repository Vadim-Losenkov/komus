const $wrapper = document.querySelector('.parent__wrapper')
if ($wrapper) {
  const $items = $wrapper.querySelectorAll('[data-academy-item]')

  let counter = 0

  let inner = document.createElement('div')
  inner.classList.add('parent__inner')
  $wrapper.insertAdjacentElement('beforeend', inner)

  $items.forEach(($item, idx) => {
    $item.setAttribute('data-academy-item', counter)
    $item.setAttribute('id', `academy-${counter}`)

    if (counter < 5) {
      $item.classList.add(`academy-item-${counter + 1}`)
      $item.classList.add('academy__item')
      inner.insertAdjacentElement('beforeend', $item)
      counter += 1
    } else {
      counter = 0

      inner = document.createElement('div')
      inner.classList.add('parent__inner')
      $wrapper.insertAdjacentElement('beforeend', inner)

      $item.classList.add(`academy-item-${counter + 1}`)
      $item.classList.add('academy__item')
      inner.insertAdjacentElement('beforeend', $item)
      counter += 1
    }
  })
}

$('[href="#menuMore"]').on('click', (e) => e.preventDefault())

class Tabson {

  constructor(wrapper) {

    this.wrapper = wrapper

    this.$menu = null
    this.$items = null

    this.listener()
  }

  listener() {
    document.addEventListener('click', event => {
      const $wraper = event.target.closest(this.wrapper)
      const id = event.target.closest('[data-id]')?.dataset.id
      if ($wraper && id) {
        this.$menu = $wraper.querySelector('[data-tabson="menu"]')
        this.$items = $wraper.querySelector('[data-tabson="items"]')

        this.opener(id)
      }
    })
  }

  opener(id) {
    this.close()

    this.$menu.querySelector(`[data-id="${id}"]`).classList.add('open')
    this.$items.querySelector(`[data-item="${id}"]`).classList.add('open')
  }

  close() {
    const menuList = this.$menu.querySelectorAll('[data-id]')
    const itemsList = this.$items.querySelectorAll('[data-item]')

    menuList.forEach($el => $el.classList.remove('open'))
    itemsList.forEach($el => $el.classList.remove('open'))
  }
}
new Tabson('.courses__inner')

if ($(".reviews__item-rate").length) {
  $(".reviews__item-rate").rateYo({
    readOnly: true,
    ratedFill: "#fda700",
    normalFill: "#c4c4c4",
    starWidth: "12px"
  })
}

const $progressBar = $('[data-progress]')
$progressBar.each(function (index) {
  $(this).css({
    width: `${$(this).attr('data-progress')}%`,
    backgroundColor: progressBarColor($(this).attr('data-progress'))
  })
})

function progressBarColor(num) {
  if (num <= 40) {
    return 'red'
  } else if (num <= 80) {
    return '#ffca22'
  } else if (num <= 100) {
    return '#93E211'
  }
}

$('.reviews__slider').slick({
  arrows: false,
  dots: true
})
