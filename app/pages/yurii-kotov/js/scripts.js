/**
 * Created by Admin on 28.08.2016.
 */
window.onload = function anyDoing() {
    var bornYear = ['16 ноября 1988г']
    var hobby = [' Лентяйничать', " Спать", " Есть", " Синхрофазатрон"];
    hobby.push(' Хз что я еще могу делать');

    var addYear = document.getElementById('user-info__date');
    var addHobby = document.getElementById('user-info__hobby');
    var creatTag = document.createElement('li');
    creatTag.className = 'user-info__hobby';
    addYear.innerHTML = bornYear;

    function addToHtml(item) {
        return addHobby.appendChild(creatTag);
    }

    hobby.forEach(addToHtml);


}