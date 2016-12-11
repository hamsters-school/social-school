
$.when(
    $.ajax('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=yellow+flowers&min_height=500'),
    $.ajax('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=red+flowers&min_height=500')
).then(function(result1, result2){


    let results = result1[0].hits.concat(result2[0].hits);

    $(results).each(function(index, value) {

        //console.log(index, value.webformatURL);

        $('.slides__showImg').prepend("<img src='" + value.webformatURL + "'>");



    });

});









/*Promise.all([
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

};*/
