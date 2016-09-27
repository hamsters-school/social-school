function storage() {
    var typeText = document.getElementById("text");
    var text = typeText.value;
    var list = document.getElementById("list");

    if (typeof text === "string") {
        var newLi = document.createElement("li");
        localStorage.setItem(text, text);
        newLi.innerHTML = text;
        list.appendChild(newLi);
    }
}

function pageList() {

    for (var keyStorage in localStorage) {
        var liItem = document.createElement("li");
        liItem.innerHTML = localStorage.getItem(keyStorage);
        document.getElementById("list").appendChild(liItem);
    }
}
pageList();