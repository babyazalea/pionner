$(document).ready(function(){
    //1. 윈도우 높이값에 섹션 높이값 맞추기
     
   
        var wheight=$(window).height();
        $('section').height(wheight);
                
    
    
    
        $(window).on('resize',function(){
                var wheight=$(window).height();
                $('section').height(wheight);
            });
    

    

    
    //2. #menu li 클릭하면 해당 섹션으로 이동
    
    $('#menu li').on('click',function(){
        var i=$(this).index();
        
        $('html, body').animate({
            'scrollTop':i*wheight
        });
    });
    
    //3. 화면이 스크롤 될 때마다 현재 영역에 해당하는 메뉴 활성화
    $(window).on('scroll',function(){
        var scr=$(window).scrollTop();
        var wheight=$(window).height();
        
        for(i=0; i<4; i++){
            if(scr>=(wheight*i) && scr<wheight*(i+1)){
                $('#menu li').eq(i).addClass('on').siblings().removeClass('on');
            };
        };
    });
    //4. 마우스 움직임에 따라 오브젝트 움직임
    $('section').on('mousemove',function(e){
        var x=e.pageX;
        var y=e.pageY;
        $('.p11').css({
            'right':20+(x/30),
            'bottom':20+(y/40)
        });
        $('.p12').css({
            'right':130-(x/30),
            'bottom':-40-(y/40)
        });
        $('.p13').css({
            'right':60+(x/30),
            'bottom':200-(y/40)
        });
        $('.p21').css({
            'right':-180+(x/30),
            'bottom':-480+(y/40)
        });
        $('.p22').css({
            'right':130-(x/30),
            'bottom':-40-(y/40)
        });
        $('.p31').css({
            'right':180-(x/30),
            'bottom':30+(y/40)
        });
        $('.p32').css({
            'right':110+(x/30),
            'bottom':-270+(y/40)
        });
        $('.p33').css({
            'right':-70+(x/30),
            'bottom':-130+(y/40)
        });
        $('.p41').css({
            'right':20+(x/30),
            'bottom':-120-(y/40)
        });
        $('.p42').css({
            'right':0+(x/30),
            'bottom':-180+(y/40)
        });
    });
    //5. 마우스 휠 움직임에 따라 섹션 이동
   
    $('section').on('mousewheel',function(e,d){
                   
                    
                    if(d<0){
                         var nxt=$(this).next().offset();
                        $('html, body').stop().animate({
                            'scrollTop':nxt.top
                        });
                    }else if(d>0){
                        var pre=$(this).prev().offset();
                        $('html, body').stop().animate({
                            'scrollTop':pre.top
                        });
                    };
                });
    
});