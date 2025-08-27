

const TbuttonElList = document.querySelectorAll('.Tbutton');

TbuttonElList.forEach(TbuttonEL => {
    TbuttonEL.addEventListener('click', () => {
        TbuttonEL.classList.add('special');
    });
});

