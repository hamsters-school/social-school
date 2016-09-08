/**
 * Created by Admin on 28.08.2016.
 */
window.onload = function anyDoing() {
    var bornYear = ['16 ноября 1988г']
    var hobby = [' Лентяйничать', " Спать", " Есть", " Синхрофазатрон"];
    hobby.push(' Хз что я еще могу делать');


    var addYear = document.getElementById('user-info__date');
    addYear.innerHTML = bornYear;

    var addHobby = document.getElementById('user-info__hobby');



    hobby.forEach(function (item) {
        var creatTag = document.createElement('li');
        creatTag.className = 'user-info__hobby'
        addHobby.appendChild(creatTag).innerHTML = item + ', ';
    });

    var requestNews = new XMLHttpRequest();

    requestNews.open('get', 'news.json', false);
    requestNews.send();
    /*document.getElementById('newsGet').appendChild(document.createElement(article)).innerHTML = requestNews.responseText;*/
}