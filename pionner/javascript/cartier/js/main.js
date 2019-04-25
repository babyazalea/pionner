$(document).ready(function(){
    $('.content article').on('mouseover',function(){
       //콜백함수란? 매개변수 자리에 들어간 함수
        
        
        $(this).stop().animate({
               'width':'35%'
           },1000,function(){
            $(this).find('h3').stop().animate({
               'right':'10px'
            },400);
            $(this).find('p').stop().animate({
                'right':'10px'
            },800);
           });

            $(this).find('video').stop().animate({
                'opacity':0.9
            },1200);
            
        var vid=$(this).find('video').get(0);
        vid.play();
        vid.currentTime=0;
        
      /* $(this).stop().animate({
           'width':'35%'
       },1000).find('h3').stop().animate({
           'right':'10px'
       },700).siblings('p').stop().animate({
           'right':'10px'
       },1000);
        $(this).find('video').css({
            'opacity':'0.9'
        });*/
        

        
        
        
    });
    
    
    
    $('.content article').on('mouseout',function(){
        
        
        $(this).stop().animate({
            'width':'12%'
        },700);
        $(this).find('h3').stop().animate({
            'right':'-310px'
        });
        $(this).find('p').stop().animate({
            'right':'-310px'
        });
        $(this).find('video').stop().animate({
            'opacity':'0'
        },function(){
            vid.pause();
        });
        
        var vid=$(this).find('video').get(0);
        vid.pause();
        
        /*$(this).stop().stop().animate({
            'width':'12%'
        },700).find('h3').stop().animate({
            'right':'-310px'
        },200).siblings('p').stop().animate({
            'right':'-310px'
        },500);
        $(this).find('video').stop().css({
            'opacity':'0'
        });*/
        
        
        
    });
    
    
});//opening