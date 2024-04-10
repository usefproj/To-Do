const container = document.querySelector("#container")
const checkmark = document.querySelector(".checkmark")
let li = document.querySelector(".task-item").outerHTML
let card = document.querySelector("#cardpicker").outerHTML

function createList() {
    container.innerHTML += `${card}`;
    container.lastElementChild.classList.remove("hidden")
    saveData()
}
function addList(name) {
    if (name.value == "") {
        return false
    } else {
        const h1 = name.parentNode.nextElementSibling.nextElementSibling;
        h1.childNodes[0].nodeValue = name.value;
        name.parentNode.classList.add("hidden");
        name.parentNode.nextElementSibling.classList.add("hidden");
        h1.classList.remove("hidden");
        h1.nextElementSibling.classList.remove("hidden")
        h1.nextElementSibling.nextElementSibling.classList.remove("hidden");
    }
    saveData()
}
function changeColor(colorItem) {
    let color = colorItem.style.background;
    colorItem.parentNode.parentNode.parentNode.style.background = color
    saveData()
}
function createTask(btn) {
    const input = btn.previousElementSibling
    const ul = btn.parentNode.nextElementSibling
    if (input.value == "") {
        return false;
    } else {
        ul.innerHTML += `${li}`;
        ul.lastElementChild.classList.remove("hidden");
        ul.lastElementChild.firstElementChild.lastElementChild.innerText=input.value;
        input.value = "";
    }
    saveData()
}
function check(markThis) {
    markThis.children[0].classList.toggle("checked-mark")
    markThis.nextElementSibling.classList.toggle("checked-label")
    saveData()
}
function removeTask(parent) {
    parent.remove()
    saveData()
}
function deleteList(parent) {
    parent.remove();
    saveData()
}
function saveData() {
    localStorage.setItem("data", container.innerHTML)
}
function setData() {
    container.innerHTML = localStorage.getItem("data")
}
if (localStorage.getItem("data") != undefined) {
    setData()
}
