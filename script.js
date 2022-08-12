class Product {
    constructor(params = {}) {
        Object.assign(this, { name: null, amount: 1, bought: false }, { ...params });
    }

    static sortDefault(a, b) {
        return (a.bought - b.bought) * 10 + a.name.localeCompare(b.name);
    }
}

Product.prototype.toString = function () {
    return ` ${this.name} (x${this.amount}) - ${this.bought ? 'purchased ' : 'unpurchased'}`;
}


const groceryList = [
    { name: 'Mango', amount: 1, bought: true },
    { name: 'Potato', amount: 10 },
    { name: 'Peach', amount: 3, bought: true },
    { name: 'Banana', amount: 5 }
].map(prodDef => new Product(prodDef));


const toggleBtn = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
let listItem = document.querySelectorAll('li');
const addNewItem = document.querySelector('.addNewItem');
const addItemBtn = document.querySelector('.addItemBtn');
const deleteItemBtn = document.querySelector('.deleteItemBtn');
const listItems = document.getElementsByTagName('li');

//Task1
toggleBtn.addEventListener('click', () => {
    if (groceryList.sort(Product.sortDefault)) {
        document.querySelector('.answer_1').innerHTML = groceryList;
    } else {       
        listDiv.style.display = 'none';
        listDiv.style.display = 'block';
        toggleBtn.textContent = 'Click to show the list';
        }
});

//Task2




//Task3
addItemBtn.addEventListener('click', () => {
    let list = document.querySelector('.answer_1');
    let li = document.createElement('li');
    li.textContent = addNewItem.value;
    let appendedItem = list.appendChild(li);
    addNewItem.value = '';
});

//Task4
deleteItemBtn.addEventListener('click', () => {
    let li = document.querySelector('li');
    if (li.parentNode) {
        li.parentNode.removeChild(li);
      }
});

