function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("pending");

    // Status text
    const status = document.createElement("small");
    status.textContent = "Pending";
    status.classList.add("pending");

    // Button
    const button = document.createElement("button");
    button.textContent = "Complete";

    button.onclick = function () {
        if (status.textContent === "Pending") {
            status.textContent = "Completed";
            status.className = "completed";
            span.className = "completed";
            button.textContent = "Undo";
        } else {
            status.textContent = "Pending";
            status.className = "pending";
            span.className = "pending";
            button.textContent = "Complete";
        }
    };

    li.appendChild(span);
    li.appendChild(status);
    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
