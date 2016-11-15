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

    var women = [];
    var men = [];

    var allUsers = undefined;

    function sort() {
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].gender == 'female') {

                women.push(allUsers[i]);

            } else if (allUsers[i].gender == 'male') {

                men.push(allUsers[i]);

            }
        }
    }


    this.setGet = function(param) {

        if (param && param.gender == 'female') {

            women.push(param);

        } else if (param && param.gender == 'male') {

            men.push(param);

        } else {
            return [women, men];
        }

    };


    this.outputPeople = function() {
        allUsers = _this.arr.results;

        sort();

        /*console.log(_this.arr);
         console.log(men);*/

        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].gender == 'female') {

                var girls = document.getElementById('girls');
                var newLi = document.createElement('li');
                var pictureFemale = document.createElement('img');

                pictureFemale.setAttribute('src', allUsers[i].picture.large);
                newLi.innerHTML = "\n" + allUsers[i].name.first + " " + allUsers[i].name.last;
                girls.appendChild(newLi);
                girls.appendChild(pictureFemale);

            }else if(allUsers[i].gender == 'male') {

                var boys = document.getElementById('boys');
                var li = document.createElement('li');
                var pictureMale = document.createElement('img');

                pictureMale.setAttribute('src', allUsers[i].picture.large);
                li.innerHTML = "\n" + allUsers[i].name.first + " " + allUsers[i].name.last;
                boys.appendChild(li);
                boys.appendChild(pictureMale);
            }
        }

    };


}

Users.prototype = Object.create(Inheritance.prototype);

var inheritance = new Inheritance();
inheritance.getAjaxResult('https://randomuser.me/api?results=10');
/*setTimeout(function () {
    inheritance.outputPeople();
}, 1000);*/

var newMen = {
    name: {
        first: "Vasya",
        last: "berry",
        title: "mr"
    },
    gender: "male"
};


inheritance.outputPeople();
inheritance.setGet(newMen);




