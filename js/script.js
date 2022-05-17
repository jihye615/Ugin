$(document).ready(function(){
//nav
$('header nav > ul').mouseenter(function(){
    $(this).find('.sub').stop().fadeIn();
    $('.nav-bg').stop().fadeIn()
});

$('header nav > ul').mouseleave(function(){
    $(this).find('.sub').stop().fadeOut()
    $('.nav-bg').stop().fadeOut();
})

//slide  : fade In Out
//이미지 모두 숨기기
$('#slide img').hide();


//첫번째 이미지만 서서히 등장
$('#slide img:first').fadeIn();

//매3(3000)초마다 이미지 전환
let img = 2;  // 0, 1 , 2
let num = 0;
setInterval(function(){
          //삼함연산자
          //(조건식) ? 참:거짓
   num = (img == num) ? 0 : num = num + 1;
    

   //첫번째 이미지 서서히 사라지게
   $('#slide img').eq(num - 1).fadeOut();

   //두번째 이미지 서서히 등자
   $('#slide img').eq(num).fadeIn();


},3000);

//modal
$('#open').click(function(){
    $('#modal').show();
})
$('#colse').click(function(){
    $('#modal').hide();
})

})