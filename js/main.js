//배지 이미지 스크롤하면 안보이게 하는 부분
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        //gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl,.6,{
            opacity:0 ,
            display : 'none'
        });
        // 업 버튼 보이기!
        gsap.to(toTopEl,0.2,{
            x:0
        });
    }else{
        //배지 보이기  
        gsap.to(badgeEl,.6,{
            opacity:1 ,
            display : 'block'
        });
        // 업 버튼 숨기기! 
        gsap.to(toTopEl,0.2,{
            x:100
        });

    }
},300));

toTopEl.addEventListener('click',function(){
    gsap.to(window,.7,{
        scrollTo:0
    })
});



// fade-in 메인화면에 음료가 새로고침하면 서서히 나타내는 부분
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl,index){
    //gsap.to(요소,지속시간,옵션)
    gsap.to(fadeEl,1,{
        opacity : 1,
        delay: (index+1) *.5
    });
});


//스와이프
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction:'vertical',
    autoplay : true,
    loop:true
});


new Swiper('.promotion .swiper-container',{
    direction:'horizontal',
    slidesPerView: 3,     //한번에 보여지는 슬라이드 갯수
    spaceBetween : 10,  // 슬라이드 간 여백 설정
    centeredSlides : true,  //첫번째 슬라이드를 중앙에 배치
    loop:true,
    autoplay : {
        delay:1000
    },
    pagination:{
        el:'.promotion .swiper-pagination' ,    // 페이지 번호 요소 선택자
        clickable:true,
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});


new Swiper('.awards .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});

const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion; 
    if(isHidePromotion){
        //숨김 처리!
        promotionEL.classList.add('hide');
    }
    else{
        //보임 처리!
        promotionEL.classList.remove('hide');
    }
    
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }


function floatingObject(selecotr,delay,size){
// gsap.to(요소 , 시간 옵션);
gsap.to(selecotr,random(1.5,2.5),{
    y:size,
    repeat:-1,
    yoyo:true,
    ease:Power1.easeInOut,
    delay: random(0,delay)
});
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 30);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl,
        triggerHook:.8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});


