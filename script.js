

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
const slider = document.querySelector('aggression-slider');

    slider.addEventListener('input', function() {
        const value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, #a7eaff 0%, #a7eaff ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
    });

    const updateBackground = () => {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, #a7eaff 0%, #a7eaff ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
    };

    updateBackground();

    slider.addEventListener('input', updateBackground);
