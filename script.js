const chipButtons = document.querySelectorAll('.chip');
const foodCards = document.querySelectorAll('.food-card');
const addButtons = document.querySelectorAll('.buy-btn');
const cartCount = document.getElementById('cartCount');

let cartItems = 2;

chipButtons.forEach((button) => {
  button.addEventListener('click', () => {
    chipButtons.forEach((chip) => chip.classList.remove('active'));
    button.classList.add('active');

    const filter = button.textContent.trim().toLowerCase();

    foodCards.forEach((card) => {
      const categories = card.dataset.category || '';
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartItems += 1;
    cartCount.textContent = cartItems;
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.7';
  });
});
