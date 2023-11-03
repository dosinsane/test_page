function addTask() {
  var taskInput = document.getElementById('task');
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById('taskList');
    var taskItem = document.createElement('li');
    taskItem.innerHTML = taskText;

    taskItem.onclick = function() {
      taskItem.classList.toggle('completed');
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
      taskList.removeChild(taskItem);
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}