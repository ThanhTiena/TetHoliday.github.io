$(document).ready(function() {
    $('#action_menu_btn').click(function() {
        $('.action_menu').toggle();
    });
    setTimeout(display, 2000);
    setTimeout(displayButton, 5000);
});

function displayButton() {
    $('#button').css('display', 'block');
}

function display() {
    $('.container-fluid').css('display', 'block');
    $('.content').css('display', 'none');

}