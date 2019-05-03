const toggle=document.querySelector('.toggle'),
    rangeForm=toggle.querySelector('form'),
    slider=rangeForm.querySelector('input');

    slider.oninput = handlingInput;

    function handlingInput(e){
        const currentValue = e.target.value;
        console.log(currentValue);
    }

    