const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {
  var val_prompt = prompt('list...')
  let res = newItem(val_prompt)
}
function newItem(val_prompt) {
  
  console.log('Received value', val_prompt)
  var item = val_prompt //document.getElementsByClassName("button center").value;
  var ul = document.getElementById('todo-list');
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);
  // document.getElementsByClassName("button center").value = "";
  li.onclick = removeItem;
}
​
document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newItem();
  }
};
function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}




