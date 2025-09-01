

const TbuttonElList = document.querySelectorAll('.Tbutton');

TbuttonElList.forEach(TbuttonEL => {
    TbuttonEL.addEventListener('click', () => {
        TbuttonEL.classList.add('special');
    });
});

//var slider = document.getElementById("aggression-slider");
//slider.addEventListener("input", function(){
//    var x = slider.value;
//    var color = 'linear-gradient(90deg, rgb(147, 234, 240)' + x + '%,rgb(204, 233, 255)' + x +'%)';
//    slider.style.background = color;
//})

const rangeSlider = document.querySelector("slider")
rangeSlider.style.background = 'linear-gradient(to right, rgb(147, 234, 240) ${'