function openCartBox() {
  const cartBox = document.querySelector("#cartBox");
  cartBox.classList.toggle('open');
}

const prev = document.querySelector('#prevButton');
const next = document.querySelector('#nextButton');
const items = document.querySelector('.items');

prev.addEventListener('click', () => {
  items.scrollTop -= 116;
});

next.addEventListener('click', () => {
  items.scrollTop += 116;
});
