/**
 * Created by Admin on 28.08.2016.
 */
window.onload = function anyDoing() {
    var bornYear = ['16 ноября 1988г']
    var hobby = ['Лентяйничать', " Спать", " Есть", " Синхрофазатрон"];
    hobby.push(' Хз что я еще могу делать');

    var addYear = document.getElementById('user-info__date');
    var addHobby = document.getElementById('user-info__hobby');

    addYear.innerHTML = bornYear;
    addHobby.innerHTML = hobby;

}