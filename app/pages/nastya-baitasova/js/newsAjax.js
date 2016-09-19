/**
 * Created by admin on 11.09.2016.
 */

function article() {
    var elementId = document.getElementById('news');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'news.json', false);
    xhr.send();

    if (xhr.status != 200) {
        elementId.innerHTML = xhr.status + ': ' + xhr.statusText;
    }else {
        var arr = JSON.parse(xhr.responseText);
        arr = arr.responseData.entries;
    for (var i = 0; i < arr.length; i++) {
        var newsLi = document.createElement('li');
        var title = document.createElement('h1');
        var content = document.createElement('p');
        var link = document.createElement('a');

        title.innerHTML = arr[i].title;
        content.innerHTML = arr[i].contentSnippet;
        link.setAttribute('href', arr[i].link);
        link.innerHTML = "Посмотреть далее!";

        elementId.appendChild(newsLi);
        newsLi.appendChild(title);
        newsLi.appendChild(content);
        newsLi.appendChild(link);
    }
}

}

article();


