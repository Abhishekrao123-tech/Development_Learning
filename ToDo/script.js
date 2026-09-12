// const input = document.querySelector("#todo-input");
// const todoList = document.querySelector(".todo-lists");

// document.querySelector("#submit").addEventListener("click", () => {
//   const inputData = input.value.trim();

//   // Prevent empty todos
//   if (inputData === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   input.value = "";

//   // Main todo item
//   const todo_el = document.createElement("div");
//   todo_el.classList.add("todo-item");

//   // Todo text container
//   const todo_content_el = document.createElement("div");

//   const todo_input_el = document.createElement("input");
//   todo_input_el.classList.add("todo");
//   todo_input_el.type = "text";
//   todo_input_el.value = inputData;
//   todo_input_el.setAttribute("readonly", "readonly");

//   todo_content_el.appendChild(todo_input_el);
//   todo_el.appendChild(todo_content_el);

//   // Action buttons container
//   const todo_actions_el = document.createElement("div");
//   todo_actions_el.classList.add("action-items");

//   // Done Button
//   const todo_done_el = document.createElement("i");
//   todo_done_el.classList.add("fa-solid", "fa-square-check");
//   todo_done_el.style.color = "rgb(34, 46, 85)";

//   // Edit Button
//   const todo_edit_el = document.createElement("i");
//   todo_edit_el.classList.add("fa-regular", "fa-pen-to-square", "edit");
//   todo_edit_el.style.color = "rgb(34, 46, 85)";

//   // Delete Button
//   const todo_delete_el = document.createElement("i");
//   todo_delete_el.classList.add("fa-solid", "fa-trash");
//   todo_delete_el.style.color = "rgb(34, 46, 85)";

//   // Append icons
//   todo_actions_el.appendChild(todo_done_el);
//   todo_actions_el.appendChild(todo_edit_el);
//   todo_actions_el.appendChild(todo_delete_el);

//   todo_el.appendChild(todo_actions_el);

//   // Add todo to list
//   todoList.appendChild(todo_el);

//   // Done functionality
//   todo_done_el.addEventListener("click", () => {
//     todo_input_el.classList.toggle("done");
//   });

//   // Edit / Save functionality
//   todo_edit_el.addEventListener("click", () => {
//     if (todo_edit_el.classList.contains("edit")) {
//       todo_edit_el.classList.remove("edit");
//       todo_edit_el.classList.remove("fa-pen-to-square");
//       todo_edit_el.classList.add("fa-x");
//       todo_edit_el.classList.add("save");

//       todo_input_el.removeAttribute("readonly");
//       todo_input_el.focus();
//     } else {
//       todo_edit_el.classList.remove("save");
//       todo_edit_el.classList.remove("fa-x");
//       todo_edit_el.classList.add("fa-pen-to-square");
//       todo_edit_el.classList.add("edit");

//       todo_input_el.setAttribute("readonly", "readonly");
//     }
//   });

//   // Delete functionality
//   todo_delete_el.addEventListener("click", () => {
//     todoList.removeChild(todo_el);
//   });
// });