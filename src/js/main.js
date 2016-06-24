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
images.forEach(function (x) {
  var node = $(".board");
  var imageHTML = imageTemplate(x);
  node.append(imageHTML);
});



<div class="price">
	<p>$${item.price}</p>
</div>
*/

function etsyTemplate(item) {
  return `<div class="item-grid">
     <div class="pic">
        <a href="${item.url}"><img src="${item.image}"></a>
     </div>
     <div class="info">
     	<p><a href="${item.url}">${item.title}</a></p>
        <p><a href="${item.shop_url}">${item.shop_name}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$${item.price}</p>
     </div
   </div>`;
}


etsyItems.forEach(function(x) {
  var node = $('.flex-column');
  var etsyHTML = etsyTemplate(x);
  node.append(etsyHTML);
});