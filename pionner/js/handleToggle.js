const toggle=document.querySelector('.toggle'),
    rangeForm=toggle.querySelector('form'),
    slider=rangeForm.querySelector('input');

    slider.oninput = handleInput;

    function handleInput(e){
        const currentValue = e.target.value;
    }