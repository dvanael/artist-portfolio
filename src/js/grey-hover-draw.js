const draws = document.querySelectorAll('.draw');

draws.forEach((draw) => {
  draw.addEventListener('mouseover', () => {
    draws.forEach((otherDraw) => {
      if (otherDraw !== draw) {
        otherDraw.classList.add('gray');
      }
    });
  });

  draw.addEventListener('mouseout', () => {
    draws.forEach((otherDraw) => {
      otherDraw.classList.remove('gray');
    });
  });
});