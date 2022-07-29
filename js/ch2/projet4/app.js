// projet 4 - Todo List
// --------------------

// Variables

const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");
const inputTask = document.querySelector("#input-task");

// Event Listener pour le bouton + (ajouter une tâche)

addTask.addEventListener("click", () => {

    let task = document.createElement("div"); // créer une div
    task.classList.add("task"); // j'ajoute une classe "task" à ma div

    let li = document.createElement("li"); // je crée une balise li
    li.innerText = `${inputTask.value}`; // je récupère la valeur de l'input

    task.appendChild(li); // Cela rajoute une balise li au sein de ma div

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add("checkTask");

    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('delete-task');

    task.appendChild(deleteBtn);

    inputTask.value === "" ? alert("Veuillez rentrer une tache") : taskContainer.appendChild(task); 

    inputTask.value = ""; // permet de libérer le champ de saisie une fois la tâche ajouter

    checkBtn.addEventListener("click", () =>{
    // checkBtn.previousSibling.style.textDecoration = "line-through";
    // previousSiblings / nextSiblings
    // parentElement
    // childElement

        li.classList.toggle("toggle-task"); // toggle = bascule (add - remove)
    })

    deleteBtn.addEventListener("click", () =>{

        deleteBtn.parentElement.remove();

    })



})












