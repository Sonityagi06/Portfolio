const inputBox = document.getElementById('inputBox');
const addbtn = documentn.getElementById('addbtn');
const todoList = document.getElementById('todoList');


const addTodo = ()=>{
    const inputText = inputBox.Value.trim();
    if(inputText.length<=0){
        alert("You must write something in your to do");
        return false
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    

    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn","editbtn");
    li.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn","deletebtn");
    li.appendChild(deletebtn);

    todoList.appendChild(li);
    inputBox.value = "";
}

const updateTodo=(e)=

addbtn.addEventListener('click',addTodo);

