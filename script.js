const myList = document.querySelector("#myList");
const myInput = document.querySelector("#myInput");

const addtask = () => {
  const targeted = document.querySelectorAll("li");
  let count = targeted.length + 1;
  let el = document.createElement("li");
  el.innerHTML = ` <p class="task">${myInput.value}</p>
    <button onclick="updatetask(${count})">Update</button>
    <button onclick="deletetask(${count})">Delete</button>`;
  el.setAttribute("key", `${count}`);
  myList.appendChild(el);
  myInput.value = "";
};

const updatetask = (n) => {
  const targeted = document.querySelectorAll("li");
  targeted.forEach((element) => {
    if (element.getAttribute("key") == n) {
      element.firstElementChild.innerText = prompt("Enter The New Task");
    }
  });
};
const deletetask = (n) => {
  const targeted = document.querySelectorAll("li");
  targeted.forEach((element) => {
    if (element.getAttribute("key") == n) {
      element.style.display = "none";
    }
  });
};
