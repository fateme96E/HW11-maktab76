

function slideShow() {
    let slides = document.getElementsByClassName('slides');
    let slideInd = 0;
    function hideAndShow() {
        Array.from(slides).forEach(slide => {
            slide.style.display = "none";
        })
        slideInd ++;
        if (slideInd > slides.length){slideInd = 1}
        slides[slideInd-1].style.display = "block";
        setTimeout(hideAndShow, 10000)
    }
    hideAndShow();
}

slideShow();