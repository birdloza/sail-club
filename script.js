document.addEventListener("DOMContentLoaded", function() {
document.getElementById("burger").addEventListener("click", function () {
document.querySelector("body").classList.toggle("open")
})
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger1").addEventListener("click", function () {
    document.querySelector("body").classList.toggle("open")
    })
    })

let slider = document.querySelectorAll('.slider');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imageIndex = 0;

next.onclick = function () {
    
    slider[imageIndex].classList.remove('active');
    if (imageIndex === slider.length - 1) {
        imageIndex = 0;
    } else {
    imageIndex += 1;
};
slider[imageIndex].classList.add('active');
};
prev.onclick = function () {
    slider[imageIndex].classList.remove('active');
    if (imageIndex === 0) {
        imageIndex = slider.length - 1;
    } else {
        imageIndex -= 1;
    };
    slider[imageIndex].classList.add('active');
};
