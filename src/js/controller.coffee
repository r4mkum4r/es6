$arrow = $('.arrow')
window.isPreview = false

$arrow.on 'click', (evt) ->
  evt.preventDefault()
  evt.stopPropagation()
  window.socket.emit 'changeSlide', {
    type : evt.target.value
  }

  return false