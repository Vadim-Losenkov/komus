const $wrapper = document.querySelector('[data-academy]')
const $items = $wrapper.querySelectorAll('[data-academy-item]')

let counter = 0

$items.forEach(($item, idx) => {
  $item.setAttribute('data-academy-item', counter)
  $item.setAttribute('id', `academy-${idx}`)
  counter = counter < 4 ? counter + 1 : 0
})

// делаем просто динамическое добавление в див и не паримся