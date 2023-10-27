document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addBtn = document.getElementById('add');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });

    function createTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <span class="delete">Delete</span>
        `;
        taskList.appendChild(taskItem);
    }
});
