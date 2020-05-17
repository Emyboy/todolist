let dummyData = [];
const todoComponent = (title, id) => {
    return `<div id='todo-${id}' class="shadow alert alert-warning alert-dismissible fade show" role="alert">
  <strong>${id}: ${title}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span delete-id='${id}' onClick='removeTodo(${id})' id='delete-btn' aria-hidden="true">&times;</span>
  </button>
</div>`
};

let inputValue;
document.getElementById('text-input').addEventListener('input', e => inputValue = e.target.value);


const renderToDos = () => {
    document.getElementById('todo-list').innerHTML += "";
    dummyData.map((val, i) => {
        val === "" ? null : document.getElementById('todo-list').innerHTML += todoComponent(val.title, val.id)
    })
};

const removeTodo = (id) => {
    console.log(dummyData, id);
    document.getElementById(`todo-${id}`).remove();
    dummyData.map((val, i) => dummyData[id] = '');
    console.log(dummyData)
    // dummyData.splice(id, 1);
}

const createToDO = (todo) => {
    console.log('adding', todo);
    if(todo.title === undefined || todo.title === ""){
        alert('Please enter text');
    }else {
        dummyData.push({ title: todo.title, id: dummyData.length });
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

document.getElementById('add-btn').addEventListener('click', () => createToDO({ title: inputValue }))


// adding placeholder text 
dummyData.length === 0 ? document.getElementById('todo-list').innerHTML = `<h4>No Todo Add Yet</h4>` : null;
