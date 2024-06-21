let srh_logo = document.getElementsByClassName('srh_logo')[0];
let search_box = document.getElementsByClassName('search_8_box')[0];
let out_logo = document.getElementsByClassName('out_logo')[0];
let side_logo = document.getElementsByClassName('side_logo')[0];
let header_txt  = document.getElementsByClassName('header_txt')[0];
let ham_out  = document.getElementsByClassName('ham_out')[0];
let chs_title = document.getElementsByClassName('chs_title');
let hide_hd = document.getElementsByClassName('hd_hide_box');



srh_logo.addEventListener('click', () => {
    search_box.animate([
        {
            top: `-100%`
        },
        {
            top: `0%`
        }
    ], {
        duration: 1000,
        fill: `forwards`
    });
});

out_logo.addEventListener('click', () => {
    search_box.animate([
        {
            top: `0%`
        },
        {
            top: `-100%`
        }
    ], {
        duration: 1000,
        fill: `forwards`
    });
});

side_logo.addEventListener('click', () => {
    header_txt.animate([
        {
            left: `-100%`
        },
        {
            left: `0%`
        }
    ], {
        duration: 1000,
        fill: `forwards`
    });
});
ham_out.addEventListener('click', () => {
    header_txt.animate([
        {
            left: `0%`
        },
        {
            left: `-100%`
        }
    ], {
        duration: 1000,
        fill: `forwards`
    });
});

hide_hd[0].style.display="flex"


for (let i = 0; i < chs_title.length; i++) {
    chs_title[i].addEventListener('click' , function(){
        for (let j = 0; j < chs_title.length; j++) {
            hide_hd[j].style.display="none"
            chs_title[j].style.borderBottom="0px"
            chs_title[j].style.fontWeight='normal'
        }

        hide_hd[i].style.display="flex"
        chs_title[i].style.borderBottom="2px solid"
        chs_title[i].style.fontWeight=700
        
    })
}

