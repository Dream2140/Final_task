
 /* Variable in which the wrapper for goods is stored */
 const containerForContent = document.querySelector('.goods');

 /*variable in which the quantity of goods is stored*/
 const countOfGoods = catalog.length;

 /*hang the event handler on the button "Show more"*/
 const buttonAddContent = document.querySelector(".show-more-catalog__button").addEventListener("click", buttonForAddContent);
 /* Variable counter - output of 12 products */
 var countOfItems = 0;
 /* Variable counter */
 var counter = 0;

 printContentOnCatalog();


 function printContentOnCatalog() {
     var price = 0;
     /* Calling the Sort Function */
     sortByNewness();
     /* Increase by 12 with each loading of new goods */
     countOfItems += 12;
     for (counter; counter < countOfItems; counter++) {
         if (catalog[counter]) {
             /*Add a header with discount information*/
             if (counter == 4) {
                 printTitleOnCatalog()
             }
             /*We create a block in which every 4 elements are placed*/
             if (counter === 0 || counter % 4 === 0) {
                 var wrap = document.createElement('div');
                 /*Set a different wrapper class if there are less than 4 elements*/
                 if (countOfGoods - (counter + 4) < 0) {
                     wrap.classList.add("wrap-for-four-items-less4");
                 } else {
                     wrap.classList.add("wrap-for-four-items");
                 }
                 containerForContent.appendChild(wrap);
             }
             /* Check for novelty*/
             if (catalog[counter].hasNew == 1) {
                 wrap.innerHTML += "<div class=\"goods__item\">\n                    <div class=\"goods__wrap-img\"><div class=\"goods__wrap-img__text\" data-id=\"".concat(catalog[counter].id, "\">View item</div><img class=\"goods__img\"  src=\"").concat(catalog[counter].thumbnail, "\" alt=\"\" data-id=\"").concat(catalog[counter].id, "\"></div>\n                    <div class=\"goods__new\">NEW</div>\n                    <p class=\"goods__title\" data-id=\"").concat(catalog[counter].id, "\">").concat(catalog[counter].title, "</p>\n                    <div class=\"goods__price\">").concat("&#163;" + "&nbsp;" + catalog[counter].price, "</div>\n            </div>");


             } else {

                 wrap.innerHTML += "<div class=\"goods__item\">\n                    <div class=\"goods__wrap-img\"><div class=\"goods__wrap-img__text\" data-id=\"".concat(catalog[counter].id, "\">View item</div><img class=\"goods__img\"  src=\"").concat(catalog[counter].thumbnail, "\" alt=\"\"></div>\n                    <p class=\"goods__title\" data-id=\"").concat(catalog[counter].id, "\">").concat(catalog[counter].title, "</p>\n                    <p class=\"goods__price\">").concat("&#163;" + "&nbsp;" + catalog[counter].price, "</p>\n            </div>");
             }



         }
         /* If the number of displayed products is equal to the number of products in the catalog, delete the button "ButtonViewMore" */
         if (counter == countOfGoods) {
             deletingButtonViewMore();
         }
     }
 }


 /*Add a header with discount information*/
 function printTitleOnCatalog() {
     containerForContent.innerHTML += "<div class=\"goods__heading\">\n                    <div class=\"heading__title\">Last weekend<div class=\"heading__extra\">&nbsp;extra 50%&nbsp;</div> off on all reduced boots and shoulder bags</div>\n                    <div class=\"heading__description\">This offer is valid in-store and online. Prices displayed reflect this additional discount. This offer ends at 11:59 GMT on March 1st 2019</div>\n            </div>";

 }


 /*Bringing new products to the top of the list*/
 function sortByNewness() {
     catalog.sort(function (a, b) {
         return b.hasNew - a.hasNew
     })
 }

 /*Function for Content Add Button*/
 function buttonForAddContent() {
     printContentOnCatalog();
 }
 /* Delete button - ButtonViewMore */
 function deletingButtonViewMore() {
     const viewMore = document.querySelector('.show-more-catalog__button');
     try{
     viewMore.remove();
     }catch(e){
         viewMore.parentElement.removeChild(viewMore);
     }
 }

 const goods = document.querySelector('.goods');

 document.addEventListener('click', function (event) {
     let item = event.target.dataset.id;
     for (let i = 0; i < catalog.length; i++) {
         if (item == catalog[i].id) {
             window.location = "../../item.html";
             localStorage.setItem('item', item);
         }
     }
 })



function calculationSumm() {
    var bag = JSON.parse(localStorage.getItem('cart'));
    var sum = 0;
    for (let i = 0; i < catalog.length; i++) {
        for (let y = 0; y < bag.length; y++) {
            if (catalog[i].id==bag[y].id)
                sum += (catalog[i].price*bag[y].count);
        }
    }
    document.querySelector('.bag-count').innerHTML+=sum +"$"
}
