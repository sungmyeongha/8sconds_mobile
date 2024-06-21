window.onload = function() {
    let cate_no = get_info_from_url("cate_no");
    let item_no = get_info_from_url("item_no");
    item_list(cate_no, item_no);

    let magnifier = document.getElementsByClassName('magnifier')[0];
    let target = document.getElementsByClassName('main_img_box')[0];

    if (target) {
        target.addEventListener('mouseenter', function() {
            fadeIn(magnifier, 0);
        });

        target.addEventListener('mouseleave', function() {
            fadeOut(magnifier, 0);
        });

        target.addEventListener('mousemove', function(e) {
            let rect = target.getBoundingClientRect();
            let mouseX = e.clientX - rect.left;
            let mouseY = e.clientY - rect.top;

            let px = mouseX - (magnifier.clientWidth / 2);
            let py = mouseY - (magnifier.clientHeight / 2);

            let rx = -mouseX + (magnifier.clientWidth / 2);
            let ry = -mouseY + (magnifier.clientHeight / 2);

            magnifier.style.left = `${px}px`;
            magnifier.style.top = `${py}px`;
            magnifier.style.backgroundPosition = `${rx}px  ${ry}px`;
            magnifier.style.backgroundSize = `${target.clientWidth}px  ${target.clientHeight}px`;
        });

        $(document).on('mousemove', '.img_box', function(e){
            let mouseX = e.pageX - $('.img_box').offset().left;
            let mouseY = e.pageY - $('.img_box').offset().top;

            let px = mouseX - (magnifier.width() / 2);
            let py = mouseY - (magnifier.height() / 2);

            let rx = -mouseX + (magnifier.width() / 2);
            let ry = -mouseY + (magnifier.height() / 2);

            magnifier.css({
                left: px,
                top: py,
                backgroundPosition: rx + "px " + ry + "px",
                backgroundSize: target.width() + "px " + target.height() + "px"
            });
        });

        function fadeIn(element, duration) {
            element.style.display = 'block';
            element.style.opacity = 0;
            var startTime = performance.now();

            function animate() {
                var currentTime = performance.now();
                var elapsedTime = currentTime - startTime;
                var opacity = Math.min(elapsedTime / duration, 1);
                element.style.opacity = opacity;

                if (opacity < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        }

        function fadeOut(element, duration) {
            var startTime = performance.now();

            function animate() {
                var currentTime = performance.now();
                var elapsedTime = currentTime - startTime;
                var opacity = Math.max(1 - elapsedTime / duration, 0);
                element.style.opacity = opacity;
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    element.style.display = 'none';
                }
            }
            requestAnimationFrame(animate);
        }
    }

    let item_size = document.getElementsByClassName('item_size');
    let size_option = document.getElementsByClassName('size_option')[0];

    if (item_size && size_option) {
        for (let i = 0; i < item_size.length; i++) {
            item_size[i].addEventListener('click', function() {
                for (let j = 0; j < item_size.length; j++) {
                    item_size[j].style.border = '1px solid black';
                }
                item_size[i].style.border = '2px solid black';

                size_option.classList.remove('S', 'M', 'L', 'XL', 'XXL');
                size_option.innerHTML = '';
                size_option.className = 'size_option';

                let selectedSize = item_size[i].getAttribute('data-size');
                size_option.innerHTML = `[필수] ${selectedSize}`;
                size_option.classList.add(selectedSize);

                const temp = document.createElement("div");
                temp.innerHTML = `
                    <div class="selected_item">
                        <div class="si_1">
                            <div>${(ITEM_LIST[cate_no][item_no].txt)}</div>
                            <div class="ttt2">사이즈:${selectedSize}</div>
                        </div>
                        <div class="si_2">
                            <input type="button" value="-" class="btn_qty_minus">
                            <input type="text" class="txt_qty" value="1">
                            <input type="button" value="+" class="btn_qty_plus">
                        </div>
                        <div class="si_3">
                            <div class="each_price">0원</div>
                        </div>
                    </div>`;
                document.querySelector(".selected_item_box").append(temp);
                updateEventListeners();
            });
        }
    }

    function updateEventListeners() {
        let btn_minus = document.getElementsByClassName('btn_qty_minus');
        let btn_plus = document.getElementsByClassName('btn_qty_plus');
        let txt_qty = document.getElementsByClassName('txt_qty');
        let each_price = document.getElementsByClassName('each_price');

        for (let i = 0; i < btn_minus.length; i++) {
            btn_minus[i].onclick = minusHandler;
            btn_plus[i].onclick = plusHandler;
        }

        function minusHandler(event) {
            const index = Array.prototype.indexOf.call(btn_minus, event.target);
            if (+txt_qty[index].value > 1) {
                txt_qty[index].value = +txt_qty[index].value - 1;
                total_price(index);
            } else {
                alert("최소 주문수량은 1개 입니다.");
            }
        }

        function plusHandler(event) {
            const index = Array.prototype.indexOf.call(btn_plus, event.target);
            txt_qty[index].value = +txt_qty[index].value + 1;
            total_price(index);
        }

        function total_price(i) {
            let total_price_value = +txt_qty[i].value * (ITEM_LIST[cate_no][item_no].price); // 숫자로 변환 후 곱셈
            each_price[i].innerHTML = `${total_price_value} 원`;
        }
    }

    // 초기 이벤트 리스너 추가
    updateEventListeners();


    let chs_box =  document.getElementsByClassName('chs_box');
    let prefer_box = document.getElementsByClassName('prefer_img_box');
    let item_txt = document.getElementsByClassName('item_imf_txt')[0];
    let under_main =  document.getElementsByClassName('under_main')[0];



    for (let i = 0; i < chs_box.length; i++) {
        chs_box[i].addEventListener('click' , function(){

            for (let j = 0; j < chs_box.length; j++) {
                chs_box[j].classList.remove('background')
            }
            chs_box[i].classList.add('background')

            
        })
    }

    chs_box[0].addEventListener('click' , function(){
        for (let j = 0; j < prefer_box.length; j++) {
            prefer_box[j].classList.add('back_display')
        }
        item_txt.classList.remove('back_display')
    })
    
    chs_box[1].addEventListener('click' , function(){
        for (let j = 0; j < prefer_box.length; j++) {
            prefer_box[j].classList.remove('back_display')
        }
        item_txt.classList.add('back_display')
    })

let under_title = document.getElementsByClassName('under_title')[0];
let scroll_move = under_title.getBoundingClientRect().top + 500


window.addEventListener('scroll' , function(){
    console.log(scroll_move)
console.log(window.scrollY)
    if (window.scrollY >= scroll_move) {
        
        under_title.style.position='fixed'
        under_title.style.top='0'
    }else {
        under_title.style.position='static'
    }
})


};
