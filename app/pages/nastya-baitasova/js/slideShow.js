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

    console.log(results);
    let elementId = document.getElementById('images');
    let pictures = document.createElement('img');

    for (let i = 0; i <= 20; i++) {

        pictures.setAttribute('src', results[i]);
        elementId.appendChild(pictures);

    }
});
