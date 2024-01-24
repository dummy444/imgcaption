//첫번쨰줄 .first

$('.first .item').on('mouseenter', function(){
   $(this).find('.area','.item:after').animate({opacity:1},300)
   $(this).addClass('active')
})
.on('mouseleave',function(){
   $(this).find('.area').animate({opacity:''},150)
   $(this).removeClass('active')
})

//두번째 줄 .second
$('.second .item').on('mouseenter', function(){
   $(this).find('.area').stop().animate({left:0},300,'easeOutBack');
})
.on('mouseleave',function(){
   $(this).find('.area').stop().animate({left:'-100%'},300)
   $(this).removeClass('active')
})

//세번째 줄. .third - 글씨만 중앙에서 나타남

$('.third .item').on('mouseenter', function(){
   $(this).find('p').stop().delay(50).animate({bottom:0},300);
   $(this).addClass('active');
   
})
.on('mouseleave', function(){
   $(this).find('p').stop().animate({bottom:'-80px'},150);
   $(this).delay(50).removeClass('active');
})

//네번쨰 줄 fourth 글씨 중앙에서 점멸

$('.fourth .item').on('mouseenter', function(){
   $(this).find('p').stop().delay(50).animate({opacity:1},300);
   $(this).addClass('active');
   
})
.on('mouseleave', function(){
   $(this).find('p').stop().animate({opacity:''},150);
   $(this).delay(50).removeClass('active');
})

