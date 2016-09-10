/**
 * Created by Admin on 28.08.2016.
 */
window.onload = function anyDoing() {
    var bornYear = ['16 ноября 1988г'];
    var hobby = [' Лентяйничать', " Спать", " Есть", " Синхрофазатрон"];
    hobby.push(' Хз что я еще могу делать');


    var addYear = document.getElementById('user-info__date');
    addYear.innerHTML = bornYear;

    var addHobby = document.getElementById('user-info__hobby');



    hobby.forEach(function (item) {
        var creatTag = document.createElement('li');
        creatTag.className = 'user-info__hobby';
        if (item == hobby.slice(-1)) {
            addHobby.appendChild(creatTag).innerHTML = item + '; ';
        } else {
            addHobby.appendChild(creatTag).innerHTML = item + ',';
        }

    });

    function getNewsFromGoogle() {

        var requestNews = new XMLHttpRequest();

        requestNews.open('get', 'news.json', false);
        requestNews.send;

        //var newsReady = JSON.parse(requestNews.responseText);



    }
    getNewsFromGoogle();

    /*    function getNewsFromGoogle() {
            var requestNews = new XMLHttpRequest();

            requestNews.open('get', "news.json", false);
            requestNews.send();

            requestNews.onreadystatechange = function () {
                if (requestNews.readyState != 4) return;
                if (requestNews.status != 200) {
                    console.log(requestNews.status + ': ' + requestNews.statusText);
                } else {
                    var googleNews = JSON.parse(requestNews.responseText);
                    showNews(googleNews);
                }

            }

            function showNews(googleNews) {
                googleNews.forEach(function (newsName) {
                    var getNews = document.getElementById('news-get');
                    var articleName = getNews.appendChild(document.createElement('li'));
                })
            }

        }
        getNewsFromGoogle()*/
}