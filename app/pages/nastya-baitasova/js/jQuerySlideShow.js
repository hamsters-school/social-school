$.when(
    $.ajax('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=yellow+flowers&min_height=500'),
    $.ajax('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=red+flowers&min_height=500')
).then((result1, result2) => {


    const WIDTHONE = 400;


    let results = result1[0].hits.concat(result2[0].hits);
    let widthImgs = results.length * WIDTHONE;

    $(results).each((index, value) => {

        //console.log(index, value.webformatURL);

        $('.slides__showImg').prepend("<img src='" + value.webformatURL + "'>").css({
            'width': widthImgs + "px"
        });
    });


    let arrows = 0;

    $('.slides-wrap__leftArrow').click(() => {
        if (arrows < 0) {
            $('.slides__showImg').animate({
                'left': arrows += WIDTHONE
            }, 1000);
        }
        else {
            return false;
        }
    });

    let minWidth = widthImgs - WIDTHONE;

    $('.slides-wrap__rightArrow').click(() => {
        if (arrows > -minWidth) {
            $('.slides__showImg').animate({
                'left': arrows -= WIDTHONE
            }, 1000);
        }
        else {
            return false;
        }
    });


    let trigger = false;

    $('.slides__autoplay p input').change(() => {

        trigger = !trigger;


        let autoPlay = setInterval(() => {

            if(trigger){
                if (arrows > -minWidth) {
                    $('.slides__showImg').animate({
                        'left': arrows -= WIDTHONE
                    }, 1000);
                }
                else return false;
            } else clearInterval(autoPlay);

        }, 3000);

    });

});



