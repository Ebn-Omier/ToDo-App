let // All vars
  theIput = document.querySelector(".ToDo_contener .add_tasks input"),
  AddButton = document.querySelector(".ToDo_contener .add_tasks .fa-plus"),
  taskContaner = document.querySelector(".ToDo_contener .tasks_content"),
  tasksCout = document.querySelector(".Tasks_status .tasks_count span"),
  tasksCompleted = document.querySelector(
    ".Tasks_status .tasks_completed span"
  );

// focus on input
window.onload = function () {
  theIput.focus();
};

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

    localStorage.setItem(theIput.value, "scscsxasx");

    taskContaner.innerHTML = `
    <span class="task_box">
      ${theIput.value}
      <span class="delete">Delete</span>
    </span>`;

    // last thingth [ Empty the input fild ]
    theIput.value = "";

    theIput.focus();
  }
};
// Clear all localStorage items
// localStorage.clear();
