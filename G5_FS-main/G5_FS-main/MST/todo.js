const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task function
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button>Delete</button>
  `;
  
  // Delete task
  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});
