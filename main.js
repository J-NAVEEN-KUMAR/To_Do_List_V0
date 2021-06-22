var ToDoButton = document.getElementById('ToDoButton');
var ToDoContainer = document.getElementById('ToDoContainer');
var InputField = document.getElementById('InputField');

ToDoButton.addEventListener('click', function(){

    var paragraph = document.createElement('p');
    paragraph.innerText = InputField.value;
    ToDoContainer.appendChild(paragraph);
    InputField.value=""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    })
})
