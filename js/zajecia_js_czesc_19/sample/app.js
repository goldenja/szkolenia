let list = document.querySelector('ul');

function getAllTodos() {
    return fetch('http://localhost:3000/todo')
        .then(res => { return res.json(); })
        .then(data => data);
}

getAllTodos().then(todos => {
    todos.forEach(todo => { appendTextToList(todo); });
});


function appendTextToList(todo) {

    let markup =
    `<li data-id="${todo.id}">
    <div class="list-elem-head">
        <span class="id">${todo.id}</span>
    </div>
    <div class="list-elem-body">
        <span class="text">${todo.text}</span>
        <span class="delete">x</span>
    </div>
    </li>`

    list.insertAdjacentHTML("beforeend", markup);
}


let form = document.querySelector('form.todo');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    saveTodo(form.task.value).then(res => {
        console.log(res);
        appendTextToList(res);
    });
    form.reset();
},false);


function saveTodo(text) {
    let req = new Request('http://localhost:3000/todo',{ method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({text: text})
    });

    return fetch(req)
            .then(res => { return res.json(); })
            .then(data => data );
}


list.addEventListener('click',function (e) {
    if(e.target.classList.contains('delete')) {
        const id = e.target.parentElement.parentElement.dataset.id;
        console.log(id);
        fetch(new Request(`http://localhost:3000/todo/${id}`,{ method: 'DELETE'}));
        document.querySelector(`li[data-id="${id}"]`).remove();
    }
})