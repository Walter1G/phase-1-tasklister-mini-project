document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let todoForm = document.querySelector("form");
  todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    makeTodo(document.getElementById("new-task-description").value);
    document.getElementById("new-task-description").value="";
    
  })
  

});


function makeTodo(todo){
  let p = document.createElement("p");
   p.textContent= `${todo} `;
   let btn = document.createElement("button");
   btn.textContent =" X";
   p.appendChild(btn);
   document.querySelector("#tasks").appendChild(p);

   btn.addEventListener("click", deleteTodo);
}

function deleteTodo(e){
  e.target.parentNode.remove();
}
