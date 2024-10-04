document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTaskDescription = document.querySelector("#new-task-description").value;

    if (newTaskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = newTaskDescription;
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      document.querySelector("#new-task-description").value = "";
    }
  });
});
