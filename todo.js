document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.getElementById("newTask");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            addTodo(taskText);
            newTaskInput.value = "";
        }
    });

    function addTodo(task) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${task}</span> <button class="deleteBtn">Sil</button> <button class="editBtn">Düzenle</button>`;
        taskList.appendChild(listItem);

        const deleteButton = listItem.querySelector(".deleteBtn");
        deleteButton.addEventListener("click", function () {
            deleteTodo(listItem);
        });

        const editButton = listItem.querySelector(".editBtn");
        editButton.addEventListener("click", function () {
            const newTaskText = prompt("Yeni metni girin:", task);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                editTodo(listItem, newTaskText);
            }
        });
    }

    function deleteTodo(task) {
        taskList.removeChild(task);
    }

    function editTodo(taskElement, newText) {
        const taskText = taskElement.querySelector("span");
        taskText.textContent = newText;
    }
});
