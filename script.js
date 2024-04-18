$(document).ready(function(){
    $('#btn').click(function (){
        $('#lista').slideDown()
        const inputVal = $('#txtnome').val()
        $('ul').append(`<li>${inputVal}</li>`)
        $('#txtnome').val('')
        $("ul").on('click', 'li', function(){
            $(this).toggleClass('linhaMeio')
        })
    })
})


