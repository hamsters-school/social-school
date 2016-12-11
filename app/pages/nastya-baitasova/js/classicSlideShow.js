let httpGet = (url) => {

    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

};


Promise.all([
    httpGet('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=yellow+flowers&min_height=500'),
    httpGet('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=red+flowers&min_height=500')
]).then(results => {


    let elementId = document.getElementById('images');

    for (let i = 0; i <= results.length; i++) {


        let intermediateResult = results[i].hits;

        for (let j = 0; j <= intermediateResult.length; j++) {
            let pictures = document.createElement('img');

            //console.log(intermediateResult[j].webformatURL);

            pictures.setAttribute('src', intermediateResult[j].webformatURL);
            pictures.setAttribute("onclick", "blogSelectedImg(this)");
            elementId.appendChild(pictures);
        }

    }
});

let blogSelectedImg = (myImg) => {

    let selectedImg = document.getElementById('selectedImg');
    selectedImg.innerHTML = '';

    selectedImg.appendChild(myImg.cloneNode(true));

    };




