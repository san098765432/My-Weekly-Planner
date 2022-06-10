$(document).ready(function(){
let userInput 
let rowId

$(".saveBtn").on("click",function(){
    userInput=$(this).siblings(".description").val()
    rowId=$(this).parent().attr("id")
    
    localStorage.setItem(rowId, userInput)
})

// get item

$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))
$('#18 .description').val(localStorage.getItem('18'))


let time = moment().format('MMMM, Do, YYYY')
$('#currentDay').text(time)


let currentTime = moment().hour()


$('.time-block').each(function(){
    let hourBlock= parseInt($(this).attr('id'))
    if (hourBlock < currentTime ) {
        $(this).addClass('past')
    }
    else if ( hourBlock === currentTime) {
        $(this).removeClass('past')
        $(this).addClass('present')
    }
    else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
})












})


