/**
 * Created by Admin on 28.08.2016.
 */
window.onload = function anyDoing() {
    function addInfoAboutUser() {
        var bornYear = ['16 ноября 1988г'];
        var hobby = [' Лентяйничать', " Спать", " Есть", " Синхрофазатрон"];
        hobby.push(' Хз что я еще могу делать');

        var addYear = document.getElementById('user-info__date');
        addYear.innerHTML = bornYear;

        var addHobby = document.getElementById('user-info__hobby');

        hobby.forEach(function (item) {
            var creatTag = document.createElement('li');
            creatTag.className = 'user-info__hobby';
            var addToHtml = addHobby.appendChild(creatTag);
            if (item == hobby.slice(-1)) {
                addToHtml.innerHTML = item + '... ';
            } else {
                addToHtml.innerHTML = item + ',';
            }

        });
    }
    addInfoAboutUser();

    function getNewsFromGoogle() {

        var requestNews = new XMLHttpRequest();

        requestNews.open('get', "news.json", false);


        requestNews.onreadystatechange = function () {
            if (requestNews.readyState != 4) return;
            if (requestNews.status != 200) {
                alert(requestNews.status + ': ' + requestNews.statusText);
            } else {
                try {
                    blogNews = JSON.parse(requestNews.responseText);
                } catch (someError) {
                    alert('messaga' + someError.message);
                }
                showNews(blogNews);
            }
        };
        requestNews.send();
    }

    console.log(getNewsFromGoogle())

    /*    function showNews(blogNews) {
            blogNews.forEach(function (item) {
                var article = document.appendChild(document.createElement('article'));
                article.innerHTML = item;
            });
        }*/


    //getNewsFromGoogle();

};