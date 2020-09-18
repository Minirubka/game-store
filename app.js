document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('ProductContainer');
    const basketButton = document.getElementById('BasketButton');
    const basketCounter = document.getElementById('BasketCounter');
    const basketContainer = document.getElementById('BasketContainer');
    const basketModal = document.getElementsByClassName('basketContainerModal')[0];
    const basketClose = document.getElementById('BasketClose');
    const PrevSlide = document.getElementById('PrevSlide');
    const NextSlide = document.getElementById('NextSlide');
    const slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    PrevSlide.onclick = () => { }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
    }
    const init = function () {
        if (localStorage.getItem('basket') === null) {
            localStorage.setItem('basket', JSON.stringify([]));
        }
        const basket = JSON.parse(localStorage.getItem('basket'));
        basketCounter.textContent = basket.length;
    }
    const showBasket = function (event) {
        basketModal.style.display = 'flex';
        basketContainer.innerHTML = '';
        const basket = JSON.parse(localStorage.getItem('basket'));
        for (let i = 0; i < basket.length; i++) {
            const div = document.createElement('div');
            const spanTitle = document.createElement('span');
            spanTitle.textContent = basket[i].title;
            spanTitle.classList = 'basketProductTitle';
            div.appendChild(spanTitle);
            let productPrice;
            for (let product of store.products) {
                if (product.title === basket[i].title) {
                    productPrice = product.price;
                }
            }
            const spanPrice = document.createElement('span');
            spanPrice.textContent = productPrice * basket[i].count;
            div.appendChild(spanPrice);

            const spanCount = document.createElement('span');
            spanCount.textContent = basket[i].count;
            div.appendChild(spanCount);
            basketContainer.appendChild(div);
        }
    }
    const closeBasket = function () {
        basketModal.style.display = 'none';
    }
    const addToBasket = function (event) {
        const productTitle = event.target.parentElement.children[1].textContent;
        const basket = JSON.parse(localStorage.getItem('basket'));
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].title === productTitle) {
                basket[i].count++;
                localStorage.setItem('basket', JSON.stringify(basket));
                return;
            }
        }
        basket.push(
            {
                title: productTitle,
                count: 1
            }
        );
        basketCounter.textContent = basket.length;
        localStorage.setItem('basket', JSON.stringify(basket));
        showBasket();
    }
    init();
    // Карточки товаров
    console.log(JSON.stringify(store, null, 2));
    for (let product of store.products) {
        const card = document.createElement('div');
        card.classList = 'productItem';
        container.appendChild(card);
        const cardImg = document.createElement('img');
        cardImg.src = product.preview;
        cardImg.width = '200';
        cardImg.height = '150';
        const cardTitle = document.createElement('span');
        cardTitle.textContent = product.title;
        const cardPrice = document.createElement('span');
        cardPrice.textContent = product.price;
        const cardBasket = document.createElement('button');
        cardBasket.textContent = 'Добавить в корзину';
        cardBasket.classList = 'addToBasket';
        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        card.appendChild(cardBasket);
        cardBasket.addEventListener('click', addToBasket);
    }
    // Корзина 

    basketButton.addEventListener('click', showBasket);
    basketClose.addEventListener('click', closeBasket)
});

