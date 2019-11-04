/*The variable in which there is a link to the wrapper in which the goods added to the basket are added*/
const divBagContent=document.querySelector('.bag-content');
/*Number of items in the basket*/
const countOfGoods= getCartData().length;
/* Parameters of Added Items*/
const detailsItemsInBasket= searchForItemById();

addContentToPage();
writeTotalPrice()

const emptyBag=document.querySelector('.checkout__empty-bag').addEventListener('click',deleteAllItems);
const checkoutButton=document.querySelector('.checkout__button').addEventListener('click',checkoutGoods);
/*Adding items from the cart to the page*/
function addContentToPage(){
    
    for(let i=0;i<detailsItemsInBasket.length;i++){   

   divBagContent.innerHTML += "<div id=\"".concat(detailsItemsInBasket[i].id, "\" class=\"bag-content__item\">\n                <div class=\"bag-content__wrap-img\">\n                   <div class=\"bag-content__wrap-img__text\" data-id=\"\">Edit item</div>\n                    <img src=\"").concat(detailsItemsInBasket[i].thumbnail, "\" alt=\"\" class=\"bag-content__img\">\n                </div>\n                <div class=\"bag-content__description\">\n                    <div class=\"description__title\">").concat(detailsItemsInBasket[i].title, "</div>\n                    <div class=\"description__price\">").concat("&#163;" + detailsItemsInBasket[i].price, "</div>\n                    <div class=\"description__color\">\n                        <div class=\"color__title\">Color:&nbsp;</div>\n                        <div class=\"color__item\">").concat(detailsItemsInBasket[i].colors, "</div>\n\n                    </div>\n                    <div class=\"description__size\">\n                        <div class=\"size__title\">Size:&nbsp;</div>\n                        <div class=\"size__item\">").concat(detailsItemsInBasket[i].sizes, "</div>\n                    </div>\n                    <div class=\"description__quantity\">\n                        <div class=\"quantity__title\">Quantity</div>\n                        <div class=\"quantity__minus\" data-type=\"-\" data-id=\"").concat(detailsItemsInBasket[i].id, "\">-</div>\n                        <div id=\"").concat(i, "\"class=\"quantity__number\">").concat(getCartData()[i + 1].count, "</div>\n                        <div class=\"quantity__plus\" data-type=\"+\" data-id=\"").concat(detailsItemsInBasket[i].id, "\">+</div>\n                    </div>\n                    <div data-remove=\"").concat(detailsItemsInBasket[i].id, "\" class=\"description__remove\">Remove item</div>\n                </div>\n            </div>");
    
    }
}

/* Plus button */
 document.addEventListener('click', function (event) {
    
     let item = event.target.dataset.id;
     let mark= event.target.dataset.type;
     for (let i = 0; i < detailsItemsInBasket.length; i++) {
         
         if (item == detailsItemsInBasket[i].id && mark== "+") {
             addItemToBag(item,mark);
             changeNumberOfItem(i);
         }
     }
 })

/* Minus button */
 document.addEventListener('click', function (event) {
    
     let item = event.target.dataset.id;
     let mark= event.target.dataset.type;
     for (let i = 0; i < detailsItemsInBasket.length; i++) {
         
         if (item == detailsItemsInBasket[i].id && mark== "-") {
            addItemToBag(item,mark);
             
             changeNumberOfItem(i);
         }
     }
 })

function changeNumberOfItem(i){
   
    let numberOfItem=document.getElementById(i);
    numberOfItem.innerHTML="";
    numberOfItem.innerHTML+=getCartData()[i+1].count;
}



function writeTotalPrice(){
    document.querySelector('.total-pric__price').innerHTML="";
   document.querySelector('.total-pric__price').innerHTML+="&#163;"+calculationSumm();
}

 document.addEventListener('click', function (event) {
    
     let item = event.target.dataset.remove;
     for (let i = 0; i < detailsItemsInBasket.length; i++) {
         
         if (item == detailsItemsInBasket[i].id) {
         removeItem(item)
         }
     }
 })

function removeItem(a){
   document.getElementById(a).parentElement.removeChild(document.getElementById(a));
    let tempBag=getCartData();
    for(let i=0;i<tempBag.length;i++){
        if(tempBag[i].id==a){
            tempBag.splice(i,1);
            setCartData(tempBag);
        
        }
    }
    
}
function deleteAllItems(){
    let tempBag=getCartData();
    tempBag.splice(0,tempBag.length);
    setCartData(tempBag);
    divBagContent.innerHTML="";
    divBagContent.innerHTML += " <div class=\"bag-content__empty\">Your shopping bag is empty. Use <a href=\"catalog.html\" class=\"empty__link\">&nbsp;Catalog&nbsp;</a> to add new items</div>";
    writeTotalPrice();
    writeSum();
}
function checkoutGoods(){
     let tempBag=getCartData();
    tempBag.splice(0,tempBag.length);
    setCartData(tempBag);
    divBagContent.innerHTML="";
    divBagContent.innerHTML += " <div class=\"bag-content__checkout\">Thank you for your purchase</div>";
    writeTotalPrice();
    writeSum();
}