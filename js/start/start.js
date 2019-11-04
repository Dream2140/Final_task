const divFirstItem = document.querySelector('.first-item');
const divSecondItem = document.querySelector('.second-items');
const divAmountItems = document.querySelector('.amount-items');
const divNewArrivalsItems=document.querySelector('.new-arrivals__items');
addItemsToBestOffer();

const buttonAddToBagStart=document.querySelector('.amount-items__button-bag').addEventListener('click',addItemsWithSaleToBag);
var firstItem;
var secondItem;
function addItemsToBestOffer() {
    secondItem = getRandomItem(0, catalog.length - 1);

    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].hasNew == 1&&(i!=secondItem)) {
            firstItem = i;
            break;
        }
    }
    

    printItemBestOfferItem(divFirstItem, firstItem);
    printItemBestOfferItem(divSecondItem, secondItem);
    printSumBestOffer(firstItem, secondItem);

}

function getRandomItem(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function printItemBestOfferItem(element, item) {
    let display;
    if (catalog[item].hasNew == 0) {
        display = "display:none"
    } else {
        display = "display:block"
    }
    element.innerHTML += "    <div class=\"first-item__up-arrow\"><img src=\"img/start/icons/arrow-up.png\" alt=\"\"></div>\n                    <div class=\"first-item__wrap-img\">\n                        <img src=\"".concat(catalog[item].thumbnail, "\" alt=\"\" class=\"firts-item__img\">\n                        <p class=\"first-item__new\" style=\"").concat(display, "\">NEW</p>\n                    </div>\n                    \n                    <div class=\"first-item__title\">").concat(catalog[item].title, "</div>\n                    <div class=\"first-item__price\">").concat(catalog[item].price+"&#163;", "</div>\n                    <div class=\"first-item__down-arrow\"><img src=\"img/start/icons/arrow-down.png\" alt=\"\"> </div>");
}

function printSumBestOffer(first, second) {


    divAmountItems.innerHTML += "<div class=\"amount-items__old-price\">".concat(catalog[first].price + catalog[second].price + "&#163;", "</div>\n                    <div class=\"amount-items__new-price\">").concat((catalog[first].price + catalog[second].price - 15).toFixed(2) + "&#163;", "</div>\n                    <a href=\"shopping-bag.html\"><div class=\"amount-items__button-bag\">Add to bag</div></a>");
}

function addItemsWithSaleToBag() {
 
    addItemToBag(catalog[firstItem].id);
    
    addItemToBag(catalog[secondItem].id);
}
 printNewArrivals();
function printNewArrivals(){
    
    for(let i=0;i<4;i++){
    divNewArrivalsItems.innerHTML += "    <div class=\"new-arrivals__items\">\n            <div class=\"new-arrivals__item\" >\n                <div class=\"new-arrivals-item__wrap-img\">\n                    <div class=\"new-arrivals-item__text\" data-id=\"".concat(catalog[i].id, "\">View item</div>\n                    <img src=\"").concat(catalog[i].thumbnail, "\" alt=\"\" class=\"new-arrivals-item__img\">\n                </div>\n                <div class=\"new-arrivals-item__title\" data-id=\"").concat(catalog[i].id, "\">").concat(catalog[i].title, "</div>\n                <div class=\"new-arrivals-item__price\">").concat(catalog[i].price + "&#163;", "</div>\n            </div>\n            </div>");
    }
}

 document.addEventListener('click', function (event) {
     
     let item = event.target.dataset.id;
     for (let i = 0; i < catalog.length; i++) {
         
         if (item == catalog[i].id) {
             window.location = "../../item.html";
             localStorage.setItem('item', item);
         }
     }
 })