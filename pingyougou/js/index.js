$(function () {
    var todayH = $('.lck').offset().top;
    var flag = true;
    $(window).scroll(function () {
       if ( $(document).scrollTop() >= todayH ) {
           $('.fixlist').fadeIn(500);
       } else {
           $('.fixlist').fadeOut(500);
       }
      if (flag) {
          $('.list5').children('h3').each(function (i, ele) {
              var htop = $(ele).offset().top;
              if ($(document).scrollTop() >= htop) {
                  $('.fixlist li').eq(i).addClass('color').siblings().removeClass('color');
              }
          });
      }
    });
    //电梯点击模块
    $('.fixlist').find('li').click(function () {
        flag = false;
        // console.log($(this).index())
        // $(this).addClass('color');
        // $(this).siblings().removeClass('color');
        var current = $('.list5 h3').eq($(this).index()).offset().top;
        $('body, html').stop().animate({
            scrollTop: current,
        }, function () {
            flag = true;
        });
        $(this).addClass('color').siblings().removeClass('color');

    });
    //返回顶部
    $('.goback').click(function () {
        $('body, html').stop().animate({
            scrollTop: 0,
        });
    })


})