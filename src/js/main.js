import $ from 'jquery';
import { items } from './etsy';


var etsyItems = items.results.map(function (item) {
  return {
    shop_name: item.Shop.shop_name,
    shop_url: item.Shop.url,
    title: item.title,
    url: item.url,
    image: item.Images[0].url_170x135,
    price: item.price
  };
});

function etsyTemplate(item) {
  return `
  <div class="item-grid" title="${item.title}">
    <img class="heart" src="./images/heart.png">
    <img class="hamburger" src="./images/hamburger.png">
    <div class="pic">
      <a href="${item.url}"><img src="${item.image}" alt="${item.title}"></a>
    </div>
    <div class="info">
     	<p class="title"><a href="${item.url}" alt="${item.title}">${item.title}</a></p>
      <div class="meta-row">
        <a class="shop" href="${item.shop_url}">${item.shop_name}</a>
        <p class="price">$${item.price}</p>
      </div>
    </div
  </div>`;
}

etsyItems.forEach(function (x) {
  var node = $('.flex-column');
  var etsyHTML = etsyTemplate(x);
  node.append(etsyHTML);
});