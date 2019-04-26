const toggle=document.querySelector('.toggle'),
    btnBasic=toggle.querySelector('.politicBasic'),
    btnLeft=toggle.querySelector('.politicLeft'),
    btnRight=toggle.querySelector('.politicRight');





function dragEnd(){
    btnBasic.onmouseup= null;
    btnBasic.onmousemove=null;
}

function btnReadyToMovin(e){
    const currentCursor = e.offsetX;
    
    btnBasic.onmousemove = btnDrag();
    console.log(btnLeft + 'btn');
    
    
    
    function btnDrag(){
        
    btnBasic.style.left = currentCursor +"px";
        
        btnBasic.onmouseup= dragEnd;
    }
}

function btnCapture(e){
    
    toggle.onmousedown = btnReadyToMovin;
    
}

btnCapture();