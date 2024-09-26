const taskList = document.querySelector(".task-list");
const input = document.querySelector(".inputTask");
const AddBtn = document.querySelector(".addBtn");
const updateList = document.querySelector("#update-list");

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log("Storage Data", JSON.parse(localStorage.getItem("items")));

AddBtn.addEventListener("click", (e) => {
  createItem(input.value);
});

function createItem(item) {
  itemsArray.push(item);
  localStorage.setItem("data", JSON.stringify(itemsArray));
  input.value = "";
  displayItems();
}

function displayItems() {
  taskList.innerHTML = "";
    const clear = document.createElement('button')
    clear.textContent = 'Clear All'
    clear.addEventListener('click', ()=>{
        deleteAll()

    })

    taskList.appendChild(clear)

    itemsArray.forEach((item, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    
    const taskName = document.createElement('span');
    taskName.classList.add("task-text");
    taskName.textContent = item;
    taskDiv.appendChild(taskName)

    const editIcon = document.createElement('i')
    editIcon.classList.add("fa-solid")
    editIcon.classList.add("fa-pen-to-square")
    editIcon.classList.add("edit")
    taskDiv.appendChild(editIcon)

    editIcon.addEventListener('click', ()=>{
         editItem(index)
    })

    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-trash');
    deleteIcon.classList.add('delete')
    taskDiv.appendChild(deleteIcon)

     deleteIcon.addEventListener('click', ()=>{
        deleteItem(index)
     })

    taskList.appendChild(taskDiv);
  });
}

function deleteItem(index) {
    itemsArray.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems();
  }

  function editItem(index) {
    const updatedTask = prompt("Update Task", itemsArray[index])
    if(updatedTask !== null && updatedTask.trim()) {
        itemsArray[index] = updatedTask
        localStorage.setItem("item", JSON.stringify(updatedTask))
    }
    displayItems()
  }

  function deleteAll() {
    localStorage.clear()
    itemsArray.length = 0
    displayItems()
  }