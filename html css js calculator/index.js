(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clyer');
    let equel = document.querySelector('.btn-equel');

    buttons.forEach(function(buttons){
        buttons.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value ;
        })
    });
})();