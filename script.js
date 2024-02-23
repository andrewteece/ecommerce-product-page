const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.querySelector('.close--btn');
const menu = document.querySelector('.nav__links');
const overlay = document.querySelector('.menu--overlay');
const mainImage = document.querySelector('.main__product--image');
const mainImageLightbox = document.querySelector(
    '.lightbox__wrapper .main__product--image'
);

const images = document.querySelectorAll('.main__product--preview img');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const amount = document.querySelector('.product--amount');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const slider = document.querySelector('.product__image--mobile');
const mobileImg = document.querySelector('.image--mobile');
const cartBtn = document.querySelector('.cart__btn');
const cart = document.querySelector('.cart__holder');
const closeLightboxBtn = document.querySelector('.lightbox--close');
const lightbox = document.querySelector('.lightbox');
const addBtn = document.querySelector('.btn--add');
const indicator = document.querySelector('.cart__indicator');
const cartContent = document.querySelector('.cart__content');

let amountValue = 0;
let currentImg = 1;

indicator.style.display = 'none';
function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
}
function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}
function handelPlus() {
    amountValue++;
    amount.innerText = amountValue;
}
function handelMinus() {
    if (amountValue > 0) {
        amountValue--;
    }
    amount.innerText = amountValue;
}

function nextImage() {
    if (currentImg == 1) {
        currentImg = 4;
    } else {
        currentImg--
    }
    mobileImg.src = `./images/image-product-${currentImg}.jpg`;
}

function prevImage() {
    if (currentImg == 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }
    mobileImg.src = `./images/image-product-${currentImg}.jpg`;
}

function toggleCart() {
    cart.classList.toggle('cart--hidden');
}

function closeLightbox() {
    lightbox.classList.add('lightbox--hidden');
}

function openLightbox() {
    lightbox.classList.remove('lightbox--hidden');
}

function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
        cartContent.classList.remove('empty');
        cartContent.innerHTML = `<div class="product">
        <div>
        <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
        <div class="product__info">
                        <p class="product__title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="btn--delete" type="button" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="btn--checkout" type="button">Checkout</button>
                  </div>`;
        indicator.style.display = "block";
        indicator.innerText = amountValue;
    }
}

function deleteItem() {
    cartContent.classList.add('empty');
    cartContent.innerHTML = `<p>Your card is empty</p>`;
    indicator.style.display = "none";
}

images.forEach((image) => {
    image.addEventListener('click', () => {
        const lastImg = document.querySelectorAll('.selected');
        if (lastImg) {
            lastImg[0].classList.remove('selected');
        }
        image.classList.add('selected');
        const selectedImg = document.querySelector('.selected');
        switch (selectedImg.getAttribute('src')) {
            case "./images/image-product-1-thumbnail.jpg":
                mainImage.src = "./images/image-product-1.jpg";
                mainImageLightbox.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                mainImage.src = "./images/image-product-2.jpg";
                mainImageLightbox.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                mainImage.src = "./images/image-product-3.jpg";
                mainImageLightbox.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                mainImage.src = "./images/image-product-4.jpg";
                mainImageLightbox.src = "./images/image-product-4.jpg";
                break;
        }
    });
});

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
plusBtn.addEventListener('click', handelPlus);
minusBtn.addEventListener('click', handelMinus);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
cartBtn.addEventListener('click', toggleCart);
closeLightboxBtn.addEventListener('click', closeLightbox);
mainImage.addEventListener('click', openLightbox);
addBtn.addEventListener('click', addItem);


