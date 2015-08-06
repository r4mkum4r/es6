var moveSlide;

Reveal.initialize({
  fragments: true
});

// Reveal.slide(4);

moveSlide = function(data) {
  switch (data) {
    case 'slideRight':
      return Reveal.right();
    case 'slideLeft':
      return Reveal.left();
    case 'slideDown':
      return Reveal.down();
    case 'slideUp':
      return Reveal.up();
  }
};

window.socket.on('changeSlide', _.debounce(moveSlide, 100));
