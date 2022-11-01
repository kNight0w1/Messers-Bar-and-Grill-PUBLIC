var Prev = document.querySelector('#prev');
var Next = document.querySelector('#next');
var index = 0;

var someContent = document.querySelector('#someContent');



function shift() {
if (index == 0) { someContent.className = "some-content0"; }
else if (index == 1) { someContent.className = "some-content1"; }
else if (index == 2) { someContent.className = "some-content2"; }
else if (index == -2) { someContent.className = "some-content-2"; }
else if (index == -1) { someContent.className = "some-content-1"; }
}



Prev.addEventListener("click", function() {
    if (index > -2) {
        index -= 1;
    }else {index = 2;}

    shift();
});

Next.addEventListener("click", function() {
    if (index < 2) {
        index += 1;
    }else {index = -2;}

    shift();
});
