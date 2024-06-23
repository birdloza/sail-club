window.onload = function() {
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


let cityList = document.querySelector('.cityList');
let cityInput = document.getElementById('cityChoiseInput');
// filtering
cityInput.addEventListener('input', function() {
    let filter = cityInput.value.toUpperCase();
    let li = cityList.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
});




cityInput.addEventListener('focus', function() {
    cityList.style.display = 'block';
    let element = cityList.querySelectorAll('li');
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function() {

            cityInput.value = this.querySelector('a').innerHTML;
            cityList.style.display = 'none';
        });
    }
    
});
// cityInput.addEventListener('blur', function(evt) {
  
//     cityList.style.display = 'none';

// });

// Добавляем событие клика на документ
document.addEventListener('click', function(event) {
  // Проверяем, является ли цель клика элементом dropdown menu или input
  if (event.target.classList.contains('cityList') || event.target.id === 'cityChoiseInput') {
    return; // Если да, то мы ничего не делаем
  }

  // Если целевой объект клика не является dropdown menu или input,
  // то скрываем dropdown menu и очищаем input
  cityList.style.display = 'none';
});


};