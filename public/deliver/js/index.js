var carouselHeightStr = '350px';
if (IsPC()) {
    //  若果是pc端
    document.body.classList.add('desktop')
} else {
    //  移动端
    document.body.classList.add('mobile')
    carouselHeightStr = window.screen.availWidth * 0.5625 + 'px'
}

layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        , width: '100%' //设置容器宽度
        , height: carouselHeightStr //设置容器宽度
        , arrow: 'hover' //始终显示箭头
        , indicator: 'none'
        //,anim: 'updown' //切换动画方式
    });
});