document.addEventListener("DOMContentLoaded", function() {
    const addTodoButton = document.getElementById("addTodo");
    const newTodoInput = document.getElementById("newTodo");
    const todoList = document.getElementById("todos");

    addTodoButton.addEventListener("click", function() {
        addTodo();
    });

    newTodoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = newTodoInput.value.trim();

        if (todoText !== "") {
            const newTodo = document.createElement("li");
            newTodo.className = "todo";
            
            // Create and append a span element for the todo text
            const todoSpan = document.createElement("span");
            todoSpan.textContent = todoText;
            newTodo.appendChild(todoSpan);

            // Create and append an input element for editing
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = todoText;
            editInput.className = "edit";
            editInput.style.display = "none";
            newTodo.appendChild(editInput);

            const removeButton = document.createElement("span");
            removeButton.className = "remove-todo";
            removeButton.textContent = "Remove";

            removeButton.addEventListener("click", function() {
                newTodo.remove();
            });

            const editButton = document.createElement("span");
            editButton.className = "edit-todo";
            editButton.textContent = "Edit";

            editButton.addEventListener("click", function() {
                // Toggle between displaying the todo text and the edit input
                todoSpan.style.display = "none";
                editInput.style.display = "inline-block";
                editInput.focus(); // Focus on the input field
            });

            // When editing is finished, update the todo text and toggle visibility
            editInput.addEventListener("blur", function() {
                todoSpan.textContent = editInput.value;
                todoSpan.style.display = "inline-block";
                editInput.style.display = "none";
            });

            newTodo.addEventListener("mouseenter", function() {
                removeButton.style.display = "inline-block";
                editButton.style.display = "inline-block";
            });

            newTodo.addEventListener("mouseleave", function() {
                removeButton.style.display = "none";
                editButton.style.display = "none";
            });

            newTodo.appendChild(editButton);
            newTodo.appendChild(removeButton);
            todoList.appendChild(newTodo);
            newTodoInput.value = "";
        }
    }
});
