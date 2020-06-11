$(document).ready(function(){
    $('.tab_item').click(function(){
        $('.active_tab').removeClass('active_tab');
        $(this).toggleClass('active_tab');
    })
})