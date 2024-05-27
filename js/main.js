let numberInput = document.getElementById('inputNumber');
let nameInput = document.getElementById('inputName');
let categotyInput = document.getElementById('inputCategory');
let costInput = document.getElementById('inputCost');
let addBtn = document.getElementById('addButton');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');

addBtn.addEventListener('click', () => {
    if (numberInput.value.length === 0 || nameInput.value.length === 0 || categotyInput.value.length === 0 || costInput.value.length === 0) {
        alert('xdkckck')
    }
    else {const newListItemNumber = document.createElement('li');
    newListItemNumber.textContent = numberInput.value;
    list1.appendChild(newListItemNumber);
    const newListItemName = document.createElement('li');
    newListItemName.textContent = nameInput.value;
    list2.appendChild(newListItemName);
    const newListItemCategory = document.createElement('li');
    newListItemCategory.textContent = categotyInput.value;
    list3.appendChild(newListItemCategory);
    const newListItemCost = document.createElement('li');
    newListItemCost.textContent = costInput.value;
    list4.appendChild(newListItemCost);
}
  });
