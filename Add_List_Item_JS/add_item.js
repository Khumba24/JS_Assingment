var list = document.getElementById('todo-list');
var firstItem = document.getElementById('item1');
var btnAdd = document.getElementById('add-item');

btnAdd.addEventListener('click', function(){
	var newListElement = document.createElement('li');
	var item = document.getElementById('input-item').value;
	console.log(item);
	var textNode = document.createTextNode(item);
	newListElement.appendChild(textNode);
	newListElement.id = "item" + (list.childElementCount + 1);
	
	var firstItem = list.firstElementChild;
	
	list.appendChild(newListElement);
});
