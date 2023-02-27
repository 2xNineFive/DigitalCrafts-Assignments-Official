


function addItem() {

    // alert ("Button is working");
    const list = document.getElementById('list')
    const newItem = document.createElement('div');
    newItem.innerHTML = document.getElementById('box').value;
    newItem.onclick = removeItem;
    list.appendChild(newItem);
    console.log(newItem.innerHTML);
}

function removeItem() {
    document.getElementById('list').removeChild(this);
}

function removeItemHard(item) {
    document.getElementById('list').removeChild(item);

}

