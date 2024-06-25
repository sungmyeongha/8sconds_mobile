for (let i = 0; i <8; i++) {
    const main_item = document.createElement("a");
    
    main_item.classList.add("main_img_box");
    main_item.href = `eight_page3.html?cate_no=0&item_no=${ITEM_LIST[0][i].item_no}` 
    main_item.innerHTML =`
    <img src="${ITEM_LIST[0][i].src}">
        <div class="img_txt">
            <p>8 seconds</p>
            <span>${ITEM_LIST[0][i].txt}{</span>
            <p class="price">${ITEM_LIST[0][i].price}</p>
        </div>`
    document.querySelector(".main_box").append(main_item)
}

    let main_gender = document.getElementsByClassName('main_title_gender');
    let border_box = document.getElementsByClassName('border_box');

    border_box[1].style.display= "block"
    border_box[1].style.letf= "110px"


    main_gender[0].addEventListener('click' , function () {

        for (let i = 0; i < main_gender.length; i++) {
            border_box[i].style.display= "none"
            
           
        }
        border_box[0].style.display= "block"
        

        let main_box = document.getElementsByClassName('main_box')[0];
        main_box.innerHTML=""

        for (let i = 8; i <16; i++) {
            const main_item = document.createElement("a");
            
            main_item.classList.add("main_img_box");
            main_item.href = `eight_page3.html?cate_no=0&item_no=${ITEM_LIST[0][i].item_no}` 
            main_item.innerHTML =`
            <img src="${ITEM_LIST[0][i].src}">
                <div class="img_txt">
                    <p>8 seconds</p>
                    <span>${ITEM_LIST[0][i].txt}</span>
                    <p class="price">${ITEM_LIST[0][i].price}</p>
                </div>`
            document.querySelector(".main_box").append(main_item)
        }
        
    })

    main_gender[1].addEventListener('click' , function () {
        for (let i = 0; i < main_gender.length; i++) {
            border_box[i].style.display= "none"
        }
        border_box[1].style.display= "block"
        

        let main_box = document.getElementsByClassName('main_box')[0];
        main_box.innerHTML=""

        for (let i = 0; i <8; i++) {
            const main_item = document.createElement("a");
            main_item.classList.add("main_img_box");
            main_item.innerHTML =`
            <img src="${ITEM_LIST[0][i].src}">
                <div class="img_txt">
                    <p>8 seconds</p>
                    <span>${ITEM_LIST[0][i].txt}{</span>
                    <p class="price">${ITEM_LIST[0][i].price}</p>
                </div>`
            document.querySelector(".main_box").append(main_item)
        }
    })
    




const MainSwiper = new Swiper('.main_banner', {
    slidesPerView : '1', // 한 슬라이드에 보여줄 갯수
    spaceBetween : 0, // 슬라이드 사이 여백
    loop : true, // 슬라이드 반복 여부// 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination : false, // pager 여부
    autoplay :  {delay: 3000,
                disableOnInteraction :false},
    navigation:        {
    nextEl: '.right_btn',
    prevEl: '.left_btn', }
})
const SubSwiper = new Swiper('.look_book_box', {
    slidesPerView : '2', // 한 슬라이드에 보여줄 갯수
    spaceBetween : 0, // 슬라이드 사이 여백
    loop : true, // 슬라이드 반복 여부
    loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination : {
        el: ".num_coun",
        type: "fraction",
      }, // pager 여부
    autoplay :  {delay: 3000,
                disableOnInteraction :false},
    navigation:false 
})



let swiper_box = document.getElementsByClassName('main_banner')[0];
let stop_btn = document.getElementsByClassName('stop_btn')[0];
let swiper = document.getElementsByClassName('swiper');
let look_title = document.getElementsByClassName('look_type_title');
let num_coun = document.getElementsByClassName('num_coun');




stop_btn.addEventListener( `click` , ()=> {
    stop_btn.classList.toggle('stop_img')
    stop_btn.classList.toggle('play_img')

    if(stop_btn.classList.contains('play_img')){
        MainSwiper.autoplay.start();
    }else if (stop_btn.classList.contains('stop_img')){
        MainSwiper.autoplay.stop();
    }
    num_coun[0]


})




for (let i = 2; i < swiper.length; i++) {
    swiper[i].style.display="none"
}


look_title[0].style.backgroundColor="black"
look_title[0].style.color="white"

for (let i = 0; i < look_title.length; i++) {
    look_title[i].addEventListener( 'click' , ()=> {
        for (let j = 0; j < look_title.length; j++) {
            look_title[j].style.backgroundColor="white"
            look_title[j].style.color="black"
        }


            look_title[i].style.backgroundColor="black"
            look_title[i].style.color="white"
        

        for (let j = 0; j < swiper.length; j++) {
            swiper[j].style.display="none"
        }
        swiper[i+1].style.display="block"
    })
    
}



