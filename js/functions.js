feather.replace();

const cartBadge = document.querySelector('.cart__badge');
let cartCount = 0;


const cartIcon = document.querySelector('.header__cart');
const cart = document.querySelector('.cart');
const menuIcon = document.querySelector('.header__menubtn');
const menu = document.querySelector('.header__menunav');
const closeIconHeader = document.querySelector('.header__close');
const closeIconCart = document.querySelector('.cart__closeIcon');


if (cartIcon && cart) {
  cartIcon.addEventListener('click', () => cart.classList.toggle('show'));
}


if (menuIcon && menu) {
  menuIcon.addEventListener('click', () => menu.classList.add('shownav'));
}
if (closeIconHeader && menu) {
  closeIconHeader.addEventListener('click', () => menu.classList.remove('shownav'));
}
if (closeIconCart && cart) {
  closeIconCart.addEventListener('click', () => cart.classList.remove('show'));
}

const productButtons = document.querySelectorAll('.products__button');

productButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productoItem = this.closest('.products__item');
    const productImage = productoItem.querySelector('.products__image').src;
    const productName = productoItem.querySelector('.products__name').textContent;
    const productPrice = productoItem.querySelector('.products__price').textContent.replace('Precio: ', '');

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productName}" class="cart__image">
      <p class="cart__description">${productName}</p>
      <p class="cart__price">${productPrice}</p>
      <img src="../img/contenedor-de-basura.png" alt="eliminar" class="cart__trash">
    `;

    const trashIcon = cartItem.querySelector('.cart__trash');
    trashIcon.addEventListener('click', () => {
      cartItem.remove();
      cartCount--;
      actualizarCartBadge();
    });

    document.querySelector('.cart').appendChild(cartItem);
    cartCount++;
    actualizarCartBadge();
  });
});

function actualizarCartBadge() {
  cartBadge.textContent = cartCount;
  if (cartCount > 0) {
      cartBadge.classList.add('showbadge');
  } else {
    cartBadge.classList.remove('showbadge');
  }
}
