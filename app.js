document.querySelector('.box-navbar i').addEventListener("click", toggleContent);

function toggleContent() {
    var boxWrap = document.querySelector('.box-wrap2')
    if (boxWrap.style.display === "none") {
        boxWrap.style.display = "block";
    }
    else {
        boxWrap.style.display = "none";
    }

}