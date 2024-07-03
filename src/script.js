document.addEventListener('DOMContentLoaded', function () {
    var anchorTags = document.querySelectorAll('a');

    anchorTags.forEach(function (anchor) {
        anchor.addEventListener('click', function () {
            alert("Page is under working...");
        });
    });

    // change language through option....

    var e = document.querySelector('#flag');
    e.addEventListener('change', function() {
        var value = e.value;
        
        let fimg = document.querySelector('#flagimg');
        if( value == "india" )
        {
            fimg.setAttribute('src',"../asset/india.png");
        }
        else if( value == "america" )
        {
            fimg.setAttribute('src',"../asset/united-states.png");
        }
        else if( value == "pakistan" )
        {
            fimg.setAttribute('src',"../asset/pakistan.png");
        }
        else if( value == "chaina" )
        {
            fimg.setAttribute('src',"../asset/china.png");
        }
    });
    setInterval(()=>
    {
        
    },3000);
});

