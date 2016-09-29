function storage() {
    var typeText = document.getElementById("text");
    var text = typeText.value;
    var list = document.getElementById("list");

    if (typeof text === "string") {
        var newLi = document.createElement("li");
        localStorage.setItem(text, text);
        newLi.innerHTML = text;
        newLi.setAttribute("onclick", "removeLi(this)");
        list.appendChild(newLi);
    }
}


function pageList() {

    for (var keyStorage in localStorage) {
        var liItem = document.createElement("li");
        liItem.innerHTML = localStorage.getItem(keyStorage);
        liItem.setAttribute("onclick", "removeLi(this)");
        document.getElementById("list").appendChild(liItem);
    }
}
pageList();


function removeLi(myLi) {
    myLi.parentNode.removeChild(myLi);
    localStorage.removeItem(myLi.innerHTML);
}







