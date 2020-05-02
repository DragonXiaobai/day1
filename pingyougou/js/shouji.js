window.addEventListener('load',function () {
    /*获得元素*/
    var imgbox = document.querySelector('.imgbox');
    var bigimg = document.querySelector('.bigimg');
    var bigImg = document.querySelector('.bigImg');
    var border = document.querySelector('.border');
    //鼠标事件
    border.addEventListener('mouseover', function () {
        imgbox.style.display = 'block';
        bigimg.style.display = 'block';
    })
    border.addEventListener('mouseout', function () {
        imgbox.style.display = 'none';
        bigimg.style.display = 'none';
    })
    //添加移动事件获取盒子距离
        border.addEventListener('mousemove', function (e) {
            var x = e.pageX - border.offsetLeft;
            var y = e.pageY - border.offsetTop;
            //这是最终盒子imgbox left和top值 目的让鼠标在imgbox中间
            var imgX = x - imgbox.offsetWidth / 2;
            var imgY = y - imgbox.offsetHeight / 2;
            //这里因为宽高都相等，所以这里可以不用给高度设置最大值，直接用宽度的最大值就可以啦
            var imgMax = border.offsetWidth - imgbox.offsetWidth;
            if (imgX <= 0) {
                imgX = 0;
            } else if (imgX >= imgMax) {
                imgX = imgMax;
            }
            if (imgY <= 0) {
                imgY = 0;
            } else if (imgY >= imgMax) {
                imgY = imgMax;
            }
            //获得imgbox 随鼠标移动而移动的距离
            imgbox.style.left = imgX + 'px';
            imgbox.style.top = imgY + 'px';
            //设置大图片跟随imgbox移动
            //大图片的最大移动距离
            var bigMax = bigImg.offsetWidth - bigimg.offsetWidth;
            //imgbox的移动距离 公式：大图片的移动距离=imgbox的移动距离*大图片的最大移动距离/imgbox最大的移动距离
            var bigX = imgX * bigMax / imgMax;
            var bigY = imgY * bigMax / imgMax;
            bigImg.style.left = -bigX + 'px';
            bigImg.style.top = -bigY + 'px';
        })
})