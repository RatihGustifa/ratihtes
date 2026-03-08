const container = document.querySelector('.container');

function getProduct() { // Fetch data from API
    fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((response) => {
            const data = response.products;
            data.forEach((item) => {
                createCard(item);
            });
        })
        .catch(error => console.log(error));
}

function createCard(item) {
    const card = document.createElement('div');
    const card_image = document.createElement('img');
    const card_content = document.createElement('div');
    const card_title = document.createElement('h3');
    const card_price_container = document.createElement('div');
    const card_price = document.createElement('p');
    const card_discount = document.createElement('p');
    const card_rating = document.createElement('div');
    const card_rating_icon = document.createElement('span');
    const card_rating_text = document.createElement('p');

    card_image.src = item.thumbnail;
    card_image.classList.add('card-image');

    card_content.classList.add('card-content');

    card_title.classList.add('card-title');
    card_title.innerHTML = item.title + ' ' + item.description;

    card_price_container.classList.add('card-price-container');
    card_price.classList.add('card-price');
    card_price.innerHTML = '$' + item.price;

    card_discount.classList.add('card-discount');
    card_discount.innerHTML = item.discountPercentage + '% off';

    card_rating.classList.add('card-rating');
    card_rating_icon.classList.add("fa", "fa-star" , "card-rating-icon");
    card_rating_text.classList.add('card-rating-text');
    card_rating_text.innerHTML = 
    item.rating + " | Tersisa " + item.stock + "pcs";

    card.appendChild(card_image);
    card.appendChild(card_content);
    card_content.appendChild(card_title);
    card_content.appendChild(card_price_container);
    card_price_container.appendChild(card_price);
    card_price_container.appendChild(card_discount);
    card_content.appendChild(card_rating);
    card_rating.appendChild(card_rating_icon);
    card_rating.appendChild(card_rating_text);

    card.classList.add('card');
    container.appendChild(card);

    card.id =item.id;
}

getProduct();

   