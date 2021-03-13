let open_btn = document.querySelector('.arrow');
let sidebar = document.querySelector('.sidebar');
let close_btn = document.querySelector('.btn');

open_btn.addEventListener('click', function(){
    if (sidebar.classList.contains('show')){
        sidebar.classList.remove('show')
    }
});

close_btn.addEventListener('click', function(){
    sidebar.classList.add('show')
})