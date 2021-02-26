let // All vars
  theIput = document.querySelector(".ToDo_contener .add_tasks input"),
  AddButton = document.querySelector(".ToDo_contener .add_tasks .fa-plus"),
  taskContaner = document.querySelector(".ToDo_contener .tasks_content"),
  tasksCout = document.querySelector(".Tasks_status .tasks_count span"),
  tasksCompleted = document.querySelector(
    ".Tasks_status .tasks_completed span"
  );
noTaskMass = document.querySelector(".tasks_content .no_Task_Message");
// focus on input
window.onload = function () {
  theIput.focus();
};

//
if (localStorage.length) {
  noTaskMass.remove();
  for (let [key, val] of Object.entries(localStorage)) {
    taskContaner.innerHTML += `
    <span class="task_box">
      ${key}
      <span class="delete">Delete</span>
    </span>`;
  }
}

// Adding the Tsks
AddButton.onclick = function () {
  // if the input is Empty
  if (theIput.value === "") {
    // [ Traening ] Use sweet alert as Messagre.
    swal("Empty", "You Have To Wright Thomething On This Fild...");
  } else {
    noTaskMass = document.querySelector(".tasks_content .no_Task_Message");

    // check of the span with No Tasks Message is Exist.
    if (document.body.contains(document.querySelector(".no_Task_Message"))) {
      // remove the noTasksMassege
      noTaskMass.remove();
    }

    localStorage.setItem(theIput.value, theIput.value);

    taskContaner.innerHTML += `
    <span class="task_box">
      ${localStorage.getItem(theIput.value)}
      <span class="delete">Delete</span>
    </span>`;

    // last thingth [ Empty the input fild ]
    theIput.value = "";

    theIput.focus();

    // calculate the Tasks
    calcTasks();
  }
};

document.addEventListener("click", function (e) {
  // Delete Task
  if (e.target.className == "delete") {
    // Remove his parent.
    e.target.parentNode.remove();

    // localStorage.removeItem(e.target.parentNode.innerText);

    console.log(e.target.parentNode.innerText);

    // check the number of Tasks in the contaner
    if (taskContaner.childElementCount == 0) {
      createNoTasks();
    }
  }
  // End Task 'taskFinished'
  if (e.target.classList.contains("task_box")) {
    // Remove his parent.
    e.target.classList.toggle("taskFinished");
  }
  // calculate the Tasks
  calcTasks();
});

// Function to creat No Tasks Massege.
function createNoTasks() {
  let mssnot = `<span class="no_Task_Message">No Tasks To Show</span>`;
  taskContaner.innerHTML = mssnot;
}

// Function to calculate the Tasks
function calcTasks() {
  // calculate All Tasks
  tasksCout.innerHTML = document.querySelectorAll(
    ".tasks_content .task_box"
  ).length;

  // calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks_content .taskFinished"
  ).length;
}

/* 
  Exercises Tasks.
  ================
  [1] - Use sweet alert as Messagre.
  [2] - check if the Task is Exist :=
        - swet alert : 'this Task is Exist'.
        - Dont submit the task.
        - clear & acivate the the input.
  [3] - Create Delete All tasks Button.
  [4] - Create Delete taskFinished tasks Button.
  [3] - Create Delete Active tasks Button.
*/
