const items = document.querySelectorAll('.accordion__item');

items.forEach((item) => {
  item.addEventListener('click', function () {
    const toggle = item.querySelector('.accordion__content');
    const plus = item.querySelector('.icon-plus');
    const minus = item.querySelector('.icon-minus');

    toggle.classList.toggle('hidden');
    plus.classList.toggle('hidden');
    minus.classList.toggle('hidden');
  });
});
