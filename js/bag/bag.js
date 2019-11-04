// Получаем данные из LocalStorage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));

}
// Записываем данные в LocalStorage
function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));

}
const bagCount = document.querySelector('.bag-count');
addItemToBag();
// Добавляем товар в корзину
function addItemToBag(newItem, mark) {

    var cartData = getCartData() || [];
    var oldItem = null;

    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id === newItem) {
            oldItem = cartData[i];
            break;
        }
    }

    if (oldItem) {
        if (mark) {
            if (mark == "+") {
                oldItem.count = oldItem.count + 1;
            } else {
                oldItem.count = oldItem.count - 1;
            }
        } else {

            oldItem.count = oldItem.count + 1;
        }
    } else {
        cartData.push({
            id: newItem,
            count: 1
        });
    }

    setCartData(cartData);
    updatePrice();
}


function writeSum(){
    bagCount.innerHTML="";
    bagCount.innerHTML += calculationSumm() + "$";
}

function calculationSumm() {
    var bag = getCartData();
  
    var sum = 0;
    for (let i = 0; i < catalog.length; i++) {
        for (let y = 0; y < bag.length; y++) {
            
            if (catalog[i].id == bag[y].id)
                sum += (catalog[i].price * bag[y].count);
        }
        
    }

    return sum
}

function updatePrice() {
    deleteOldPrice();
    writeSum();
}

function deleteOldPrice() {
    bagCount.innerHTML = "";
}

function searchForItemById() {
    
    var itemsInBasket = [];
    var bag = getCartData();
    for (let i = 0; i < catalog.length; i++) {
        for (let y = 0; y < bag.length; y++) {
            if (catalog[i].id == bag[y].id)
                itemsInBasket.push(catalog[i]);
        }
    }
    return itemsInBasket
}
