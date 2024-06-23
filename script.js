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
for (let j = 0; j < slider.length; j++) {
    slider[j].classList.remove('active');
    dot[j].style.backgroundColor = '#EEEEEE'
}

slider[imageIndex].classList.add('active');
dot[imageIndex].style.backgroundColor = '#0EC261';
};
prev.onclick = function () {
    slider[imageIndex].classList.remove('active');
    if (imageIndex === 0) {
        imageIndex = slider.length - 1;
    } else {
        imageIndex -= 1;
    }; 
    for (let j = 0; j < slider.length; j++) {
        slider[j].classList.remove('active');
        dot[j].style.backgroundColor = '#EEEEEE'
    }
    slider[imageIndex].classList.add('active');
    dot[imageIndex].style.backgroundColor = '#0EC261';
};
let dot = document.querySelectorAll('.dot');
for (let i = 0; i < dot.length; i++) {
    dot[i].onclick = function() {
        imageIndex = i;
        for (let j = 0; j < slider.length; j++) {
            slider[j].classList.remove('active');
            dot[j].style.backgroundColor = '#EEEEEE'
        }
    slider[i].classList.add('active');
    dot[i].style.backgroundColor = '#0EC261';
    }
};
let cityList = document.querySelector('.cityList');
let cityInput = document.getElementById('cityChoiseInput');

cityInput.addEventListener('focus', function() {
    cityList.style.display = 'block';
});