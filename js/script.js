const btnColor = document.querySelectorAll('.btn');

btnColor.forEach((color) => {

    color.addEventListener('click', (event) => {
        document.documentElement.style.setProperty('--theme-color', ' ' + event.target.dataset.color +' ')
    });

});