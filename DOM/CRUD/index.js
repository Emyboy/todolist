let todoListArray = [];

const todoComponent = (title, id) => {
    return `<div id='todo-${id}' class="shadow alert alert-warning alert-dismissible fade show" role="alert">
  <strong>${id + 1}: ${title}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span delete-id='${id}' onClick='removeTodo(${id})' id='delete-btn' aria-hidden="true">&times;</span>
  </button>
</div>`
};

let inputValue;
document.getElementById('text-input').addEventListener('input', e => {
    inputValue = e.target.value
});

const renderToDos = () => {
    document.getElementById('todo-list').innerHTML += "";
    todoListArray.map((val, i) => {
        val === "" ? null : document.getElementById('todo-list').innerHTML += todoComponent(val.title, val.id)
    })
};

const removeTodo = (id) => {
    todoListArray.splice(id,1);
    document.getElementById(`todo-${id}`).remove();
    todoListArray.map((val, i) => todoListArray[id] = '');
    todoListArray.length === 0 ? document.getElementById('todo-list').innerHTML = `<h4>No Todo Add Yet</h4>` : null;
}

const createToDO = (todo) => {
    if (todo.title === undefined || todo.title === "") {
        alert('Please enter text');
    } else {
        todoListArray.push({ title: todo.title, id: todoListArray.length });
        document.getElementById('todo-list').innerHTML = '';
        renderToDos();
        document.getElementById('text-input').value = '';
        inputValue = '';
    }
}

document.querySelectorAll('#delete-btn').forEach((val, id) => {
    val.addEventListener('click', () => {
        renderToDos(id)
    })
});

document.getElementById('add-btn').addEventListener('click', (e) => {
    e.preventDefault();
    createToDO({ title: inputValue });
})


// adding placeholder text 
todoListArray.length === 0 ? document.getElementById('todo-list').innerHTML = `<h4>No Todo Add Yet</h4>` : null;
