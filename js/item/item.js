function addImgToContainer(imgs) {
    var expandImg = document.getElementById("increased-img");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "flex";
}





const addedItem = localStorage.getItem('item');
const selected = document.querySelector('.selected-item');
let index = findIndexOfItem();

addContentToPageItem();
const buttonCreateGrid = document.querySelector('.selected-item-right__add').addEventListener("click", addCurrentItemToBag);
function addContentToPageItem() {
    /*Add left*/
    selected.innerHTML += "    <div class=\"selected-item__left\">\n\n                        <div class=\"increased-img-container\">\n                            <img class=\"big-img\" id=\"increased-img\" src=\"".concat(catalog[index].thumbnail, "\">\n                        </div>\n                        <div class=\"wrap-img\">\n                            <div class=\"column\">\n                                <img class=\"firts-img item-img\" src=\"").concat(catalog[index].thumbnail, "\" alt=\"\" style=\"width:100%\" onclick=\"addImgToContainer(this);\">\n                            </div>\n                            <div class=\"column\">\n                                <img src=\"img/item/2.png\" class=\"item-img\" alt=\"\" style=\"width:100%\" onclick=\"addImgToContainer(this);\">\n                            </div>\n                            <div class=\"column\">\n                                <img src=\"img/item/3.png\" class=\"item-img\" alt=\"\" style=\"width:100%\" onclick=\"addImgToContainer(this);\">\n                            </div>\n\n                        </div>\n                    </div> ");

    /*Add right*/
    selected.innerHTML += " <div class=\"selected-item__right\">\n                        <div class=\"selected-item-right__name\">".concat(catalog[index].title, "</div>\n                        <div class=\"selected-item-right__details\">").concat(catalog[index].description, "\n                        </div>\n                        <div class=\"selected-item-right__price\">").concat(catalog[index].price, "</div>\n                        <div class=\"selected-item-right__size\">\n                            <div class=\"size-name\">Size: ").concat(catalog[index].sizes, "</div>\n                        </div>\n                        <div class=\"selected-item-right__color\">$\n                            <div class=\"color-name\">Color:").concat(catalog[index].colors, "</div>\n                        </div>\n                        <div class=\"add-wrap\">\n                            <div class=\"selected-item-right__add\">Add to bag</div>\n                        </div>\n                    </div>");

}

function findIndexOfItem() {
    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].id === addedItem) {
            return i
        }
    }
}

function addCurrentItemToBag(){

    addItemToBag(addedItem);
}
