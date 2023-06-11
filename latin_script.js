'use strict';

$(document).ready(function(){
    $('td').on('click', function(){
        $(this).find('span').toggleClass('hidden');
    });
});