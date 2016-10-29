function Users() {
    var _this = this;
    _this.arr = undefined;


    this.getAjaxResult = function (link) {
        var elementId = document.getElementById('people');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', link, false);
        xhr.send();

        if (xhr.status != 200) {
            elementId.innerHTML = xhr.status + ': ' + xhr.statusText;
        } else {
            _this.arr = JSON.parse(xhr.responseText);
        }
    };
}


function Inheritance() {
    Users.call(this);

    var _this = this;

    this.sort = function() {

        var array = _this.arr.results;

        for (var i = 0; i < array.length; i++) {
            if(array[i].gender == 'female') {

                var girls = document.getElementById('girls');
                var newLi = document.createElement('li');

                newLi.innerHTML = array[i].picture.large;
                newLi.innerHTML = array[i].name.first + array[i].name.last;
                girls.appendChild(newLi);
            } else if(array[i].gender == 'male') {

                var boys = document.getElementById('boys');
                var li = document.createElement('li');

                li.innerHTML = array[i].picture.large;
                li.innerHTML = array[i].name.first + array[i].name.last;
                boys.appendChild(li);
            }
        }

    }
}


var inheritance = new Inheritance();
inheritance.getAjaxResult('https://randomuser.me/api?results=10');
inheritance.sort();
