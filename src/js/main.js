import $ from 'jquery';
import {
  items
}
from './etsy';

// console.log(items)

var etsyItems = items.results.map(function(item) {
  return {
    shop_name: item.Shop.shop_name,
    shop_url: item.Shop.url,
    title: item.title,
    url: item.url,
    image: item.Images[0].url_170x135,
    price: item.price
  };
})
console.log(etsyItems)
/*

function imageTemplate (image) {
  return `<div class="carousel">
    <h3 class="image-title">${image.title}</h3>
    <img src="${image.image_url}">
    <p>Picture by: ${image.photographer_id}</p>
  </div>`;
}

*/