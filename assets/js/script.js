var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // add task id as a custom vallue 
  listItemEl.setAttribute("data-task-id" , taskIdCounter);

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  tasksToDoEl.appendChild(listItemEl);

  var taskActionsEl = creatTaskActions(taskIdCounter);
listItemEl.appendChild(taskActionsEl);

tasksToDoEl.appendChild(listItemEl);

  taskIdCounter++;
};

var creatTaskActions = function(taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "taskActions";

  // edit button 
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent= "Edit";
  editButtonEl.className= "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(editButtonEl)

  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent= "Delete";
  deleteButtonEl.className= "btn delete-btn";
  deleteButtonEl.setAttribute=("data-task-id", taskId);

  actionContainerEl.appendChild(deleteButtonEl);

  var statusSelectEl = document.createElement("select")
  statusSelectEl.className= "select-status";
  statusSelectEl.setAttribute= ("name", "status-change");
  statusSelectEl.setAttribute= ("data-task-id", taskId);

  actionContainerEl.appendChild(statusSelectEl);

  var statusChoices = ["To Do", "In Progress", "Done"];
  for (var i = 0; i < statusChoices.length; i++) {
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent= statusChoices[i];
    statusOptionEl.setAttribute ("value" , statusChoices[i]);

    statusSelectEl.appendChild(statusOptionEl);
    }
  

  return actionContainerEl;



}

formEl.addEventListener("submit", taskFormHandler);