// Selecting elements
const inputField = document.querySelector('input[type="text"]');
const addButton = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

// Function to create a new todo item
function createTodoItem(task) {
    // Create elements
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    const todoText = document.createElement('span');
    todoText.classList.add('todo-text');
    todoText.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    // Append elements to todo item
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    // Append todo item to the list
    todoList.appendChild(todoItem);
}

// Function to handle add button click
function handleAddButtonClick() {
    const task = inputField.value.trim();
    if (task !== '') {
        createTodoItem(task);
        inputField.value = ''; // Clear input field
    } else {
        alert('Please enter a task!');
    }
}

// Event listener for add button click
addButton.addEventListener('click', handleAddButtonClick);

// Event listener for 'Enter' key press in input field
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleAddButtonClick();
    }
});
