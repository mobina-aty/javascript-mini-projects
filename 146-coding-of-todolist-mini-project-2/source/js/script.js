let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");
/////////////////////////////////////////////////  
  //اول li میسازیم و بهش کلاس میدیم
  //بعد اسپن داخل ال ای رو میسازیم و محتواش رو همون اینپوت قرار میدیم
  // بعد ایکون سطل طباله رو میسازیم
  //بعد براش اینوت حذف کردن ال ای رو قرار میدیم
  //بعد چیزای ساخته شده اپندد میکنیم توی پرنت هاشون
  // و بعد هم یه ایونت برای دکمه انتر میسازیم 

  ////////////////////////////////////////////////////
function addNewTodo(newTodoValue) {
  let newTodoLi = $.createElement("li"); // li maker
  newTodoLi.className = //li class maker
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoTitleSpan = $.createElement("span"); //span maker
  newTodoTitleSpan.innerHTML = newTodoValue; //span inside li

  let newTodoTrash = $.createElement("i"); // make the trash icon
  newTodoTrash.className = "fa fa-trash-o delete"; //done

  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove(); //remove maded li by click on thr trash icon
  });

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
}

 addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
 
inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (event.keyCode === 13) {  //13 code is the enter code key
    if (newTodoValue) {
      inputElem.value = "";
      addNewTodo(newTodoValue);
    }
  }
});
