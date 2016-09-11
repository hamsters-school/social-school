/**
 * Created by Admin on 28.08.2016.
 */
var hobbyArray = ['танцы', 'спорт', 'вышивка крестом', 'психология', 'кулинария'];

function hobbyList(hobbyArray) {
    var element = document.getElementById('hobby');

    for (var i = 0; i < hobbyArray.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = hobbyArray[i];
        element.appendChild(newLi);
    }

}

hobbyList(hobbyArray);