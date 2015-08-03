Reveal.initialize(
  fragments : true
)
Reveal.slide(3)

moveSlide = (data) ->
  switch data
    when 'slideRight' then Reveal.right()
    when 'slideLeft' then Reveal.left()
    when 'slideDown' then Reveal.down()
    when 'slideUp' then Reveal.up()

window.socket.on 'changeSlide', _.debounce( moveSlide, 100)