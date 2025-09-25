const taskInput = document.getElementById("input");
const addBtn = document.getElementById("addbtn");
const taskList = document.getElementById("list");

addBtn.addEventListener('click', () => {
    if(taskInput.value !== ""){
        const taskText = taskInput.value ;
        const itemList = document.createElement("li");
        itemList.textContent= taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";
        deleteBtn.classList.add("task-btn", "delete-btn");

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(itemList);
            });
            const editBtn = document.createElement("button");
            editBtn.textContent = "edit";
            editBtn.classList.add("task-btn", "edit-btn");

            editBtn.addEventListener('click', () =>{
             const inputEdit = document.createElement('input');
             inputEdit.type = "text";
             inputEdit.value = itemList.firstChild.textContent;

             itemList.textContent = "" ;
             itemList.appendChild(inputEdit);

             const saveBtn = document.createElement('button');
             saveBtn.textContent = "save";
             saveBtn.classList.add("task-btn", "save-btn");

             saveBtn.addEventListener('click', () => {
                if(inputEdit.value.trim() !== ""){
                    itemList.textContent = inputEdit.value .trim();
                    itemList.appendChild(editBtn);
                    itemList.appendChild(deleteBtn);
                }
             });
             itemList.appendChild(saveBtn);
            });
        itemList.appendChild(editBtn);
        itemList.appendChild(deleteBtn);
        taskList.appendChild(itemList);
        taskInput.value = "";
    }
});