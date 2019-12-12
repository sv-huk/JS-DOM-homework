const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
button.onclick = function () {
    let myItem = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listText.setAttribute("id", "list-item");
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);
    listBtn.onclick = function () {
    list.removeChild(listItem);
    }
    input.focus();
}

$("button#add-item").click(function () {
    $(this).toggleClass("selected");
    $("#enter-item").toggleClass("selected");
    $("#item").attr("placeholder", "Item Added");
    $("#added").next("span").css("display", "inline").fadeOut(1000);
});

document.getElementById("my-list").addEventListener("mouseover", mouseOver);
document.getElementById("my-list").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("my-list").style.color = "#6c7b95";
}

function mouseOut() {
    document.getElementById("my-list").style.color = "black";
}