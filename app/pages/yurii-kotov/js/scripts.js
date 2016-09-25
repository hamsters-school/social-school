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
        var url = "news.json";

        requestNews.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var blogNews = JSON.parse(this.responseText);
                showNews(blogNews);
                console.log(blogNews);

            };

        };

        requestNews.open('GET', url, true);
        requestNews.send();

        function showNews(blogNews) {
            var getNews = document.getElementById('getNews');
            var createArtircleBlock = document.createElement('article');
            var addArticleBlock = getNews.appendChild(createArtircleBlock);

            for (var i in blogNews.responseData) {
                document.getElementById('headBlog').innerHTML = blogNews.responseData.query;
            };
            for (var k in blogNews.responseData.entries) {
                var createArtircleBlock = document.createElement('article');
                var addArticleBlock = getNews.appendChild(createArtircleBlock);
                createArtircleBlock.style.marginBottom = '20px';
                //createArtircleBlock.style.border = '1px solid gold';
                createArtircleBlock.style.fontSize = '12px';
                //createArtircleBlock.className = 'col-md-12';
                var elmentShow = '<img href="' + blogNews.responseData.entries[k].url + '">' +
                    '<h5>' + blogNews.responseData.entries[k].title + '</h5>' +
                    '<p>' + blogNews.responseData.entries[k].contentSnippet + '</p>' +
                    '<a href="' + blogNews.responseData.entries[k].link + '">' + blogNews.responseData.entries[k].link + '</a>';
                addArticleBlock.innerHTML = elmentShow;
            };
        };
    };
    getNewsFromGoogle();


};