document.querySelector('.product-link').addEventListener('mouseover', function () {
    document.getElementById('productMenu').style.display = 'block';
});

document.querySelector('.product-link').addEventListener('mouseout', function () {
    setTimeout(function () {
        if (!document.querySelector('.product-menu:hover')) {
            document.getElementById('productMenu').style.display = 'none';
        }
    }, 200);
});

document.getElementById('productMenu').addEventListener('mouseover', function () {
    this.style.display = 'block';
});

document.getElementById('productMenu').addEventListener('mouseout', function () {
    this.style.display = 'none';
});
