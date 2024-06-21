const ITEM_LIST = [
    [
        { item_no: 0, src: './img/item/item0.webp', txt: '[🟢20%~]  스트라이프 피케 카라 티셔츠 - 블랙', price: '49900' },
        { item_no: 1, src: './img/item/item1.webp', txt: '[🟢20%~]  나일론 셋업 유틸 쇼츠 - 애쉬', price: '39900' },
        { item_no: 2, src: './img/item/item2.webp', txt: '[🟢20%~]  가먼트다잉 자동차 그래픽 티셔츠 - 애쉬', price: '29900' },
        { item_no: 3, src: './img/item/item3.webp', txt: '[🟢20%~]  라이트 코튼 원턱 밴딩 팬츠 - 카키', price: '25900' },
        { item_no: 4, src: './img/item/item4.webp', txt: '[🟡30%~]  리넨 블랜드 반소매 셔츠 - 네이비', price: '49900' },
        { item_no: 5, src: './img/item/item5.webp', txt: '[🟢20%~]  가먼트다잉 자동차 그래픽 티셔츠 - 애쉬', price: '19900' },
        { item_no: 6, src: './img/item/item6.webp', txt: '[🟢20%~]  라이트 코튼 원턱 밴딩 팬츠 - 카키', price: '49900' },
        { item_no: 7, src: './img/item/item7.webp', txt: '[🟡30%~]  리넨 블랜드 반소매 셔츠 - 네이비', price: '25900' },
        { item_no: 8, src: './img/item/item8.webp', txt: '[🔴50%~] 백 오픈 데님 원피스 - 블랙', price: '39900' },
        { item_no: 9, src: './img/item/item9.webp', txt: '[🟠40%~] 포인텔 백 스트링 풀오버 - 아이보리', price: '15900' },
        { item_no: 10, src: './img/item/item10.webp', txt: '빈티지 프린트 티셔츠 - 애쉬', price: '9900' },
        { item_no: 11, src: './img/item/item11.webp', txt: '[🟠40%~] 허리 셔링 원피스 - 네이비', price: '9900' },
        { item_no: 12, src: './img/item/item12.webp', txt: '[🟢20%~]  쿨터치 강연 조직 카라 반소매 니트 - 블랙', price: '35900' },
        { item_no: 13, src: './img/item/item13.webp', txt: '[🟡30%~]  주름지 밴딩 팬츠 - 블랙', price: '15900' },
        { item_no: 14, src: './img/item/item14.webp', txt: '[🟡30%~]  스모킹 코튼 롱 원피스 - 베이지', price: '19900' },
        { item_no: 15, src: './img/item/item15.webp', txt: '[🔴50%~] 져지 톱 코튼 원피스 - 블랙', price: '19900' }
    ],
    { item_no: 0, src: './img/item/mini_item0.webp', txt: '[🟢20%~]  스트라이프 피케 카라 티셔츠 - 블랙', price: '49900' },
    { item_no: 1, src: './img/item/mini_item1.webp', txt: '[🟢20%~]  나일론 셋업 유틸 쇼츠 - 애쉬', price: '39900' },
    { item_no: 2, src: './img/item/mini_item2.webp', txt: '[🟢20%~]  가먼트다잉 자동차 그래픽 티셔츠 - 애쉬', price: '29900' },
    { item_no: 3, src: './img/item/mini_item3.webp', txt: '[🟢20%~]  라이트 코튼 원턱 밴딩 팬츠 - 카키', price: '25900' },
    { item_no: 4, src: './img/item/mini_item4.webp', txt: '[🟡30%~]  리넨 블랜드 반소매 셔츠 - 네이비', price: '49900' },
    { item_no: 5, src: './img/item/mini_item5.webp', txt: '[🟢20%~]  가먼트다잉 자동차 그래픽 티셔츠 - 애쉬', price: '19900' },
    { item_no: 6, src: './img/item/mini_item6.webp', txt: '[🟢20%~]  라이트 코튼 원턱 밴딩 팬츠 - 카키', price: '49900' },
    { item_no: 7, src: './img/item/mini_item7.webp', txt: '[🟡30%~]  리넨 블랜드 반소매 셔츠 - 네이비', price: '25900' },
    { item_no: 8, src: './img/item/mini_item8.webp', txt: '[🔴50%~] 백 오픈 데님 원피스 - 블랙', price: '39900' },
    { item_no: 9, src: './img/item/mini_item9.webp', txt: '[🟠40%~] 포인텔 백 스트링 풀오버 - 아이보리', price: '15900' },
    { item_no: 10, src: './img/item/mini_item10.webp', txt: '빈티지 프린트 티셔츠 - 애쉬', price: '9900' },
    { item_no: 11, src: './img/item/mini_item11.webp', txt: '[🟠40%~] 허리 셔링 원피스 - 네이비', price: '9900' },
    { item_no: 12, src: './img/item/mini_item12.webp', txt: '[🟢20%~]  쿨터치 강연 조직 카라 반소매 니트 - 블랙', price: '35900' },
    { item_no: 13, src: './img/item/mini_item13.webp', txt: '[🟡30%~]  주름지 밴딩 팬츠 - 블랙', price: '15900' },
    { item_no: 14, src: './img/item/mini_item14.webp', txt: '[🟡30%~]  스모킹 코튼 롱 원피스 - 베이지', price: '19900' },
    { item_no: 15, src: './img/item/mini_item15.webp', txt: '[🔴50%~] 져지 톱 코튼 원피스 - 블랙', price: '19900' }
];


// url에서 내가 필요한 정보의 값을 얻어오기
function get_info_from_url(keyword) { // cateNo, itemNo
    let url = location.href; //      
    url = url.split("?") 
    if(url.length > 1) {

        url = url[1].split("&") 

        for(let i=0; i<url.length; i++) {
    
            let tmp_url = url[i].split("=");
                                        

            if(tmp_url[0] == keyword) {
                return tmp_url[1].split("#")[0] 
            }
        }
    }
    return null;
}



const list = ["all","women","men"]


function item_list2(cate_no) {
if(cate_no == 1) {
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
        document.querySelector(`#${list[cate_no]}`).append(main_item)
    }   
    }else{
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
        document.querySelector(`#${list[cate_no]}`).append(main_item)
    }
    
    }
}



// 3페이지 
function item_list(cate_no, item_no) {
    let pafe3_item = document.createElement("div");
     pafe3_item.classList.add("main2_img_box");
    let load_tmp = ITEM_LIST[cate_no][item_no];
        pafe3_item.innerHTML =` <div class="main_img_box">
                <img src="${load_tmp.src}" class="show_img">
                <div class="magnifier" style="background-image: url(${load_tmp.src})"></div>
            </div>
            <div class="main_img_txt">
                <div class="txt_title"> 
                    <p>8 seconds</p>
                    <p class="item_name">${load_tmp.txt}</p>
                    <span>${load_tmp.price}</span>
                </div>
                <div class="main_img_msg">
                    <p>카드해택 <span>카드사별 혜택 안내</span></p>
                    <p class="pointer">포인트 적립<span>맴버십포인트 300P</span></p>
                    <P>배송방법  <span>택배배송 무료배송</span></P>
                </div>
                <div class="buy_box">
                    <div class="buy_txt">
                        <p>사이즈</p>  
                        <div class="item_size" data-size="S">S</div> 
                        <div class="item_size" data-size="M">M</div> 
                        <div class="item_size" data-size="L">L</div>
                        <div class="item_size" data-size="XL">XL</div>
                        <div class="item_size" data-size="XXL">XXL</div> 
                    </div>
                    <span class="option size_option">[필수] 옵션을 선택해 주세요</span>
                    <div class="selected_item_box">

                    </div>  
                    <div class="now_buy">
                        <div class="white_box">장바구니</div>
                        <div class="purple_box">바로구매</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="under_main content_area">
            <div class="under_title">
                <div class="chs_box background">상품정보</div>
                <div class="chs_box">추천</div>
            </div>
            <div class="item_imf_txt">
                <div class="item_imf_img"><img src=${load_tmp.src}></div>
                <div class="imf_img_msg">
                    <div class="item_desc">
                        <p>세련된 질감의 소재와 트렌디한 와이드 핏이 어우러진 바지입니다. 자연스러운 요철 조직으로 시원한 착용감을 느낄 수 있습니다. 허리 밴드 디테일로 체형을 자연스럽게 보완하며 편안합니다. 오버핏 실루엣의 상의와 캐주얼하게 매치하기 좋습니다.</p>
                    </div>
                    <div class="item_code">
                        <p> 핏정보 <span>와이드 핏</span></p>
                        <p>모델사이즈 <span>185cm , 70kg , 27인치</span></p>
                        <p>모델착용 <span>상의L / 하의082</span></p>
                        <p>소재정보 <span>겉감 : 레이온 45%, 폴리에스터 44%, 나일론 11%.</span></p>
                    </div>
                </div>
            </div>
            <div class="rotate_box">
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
                    <a  href="" class="prefer_img_box back_display">
                        <img src="${load_tmp.src}">
                        <div class="prefer_img_txt">
                            <p>8 seconds</p>
                            <span>${load_tmp.txt}</span>
                            <p class="prefer_price">${load_tmp.price}</p>
                        </div>
                    </a>
            </div>
            `

            document.querySelector(".main").append(pafe3_item)
}
