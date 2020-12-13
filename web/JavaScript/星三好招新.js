var pre = document.getElementById('pre');
var next = document.getElementById('next');
var pic = document.getElementById('turns_pic');
var select_icon = document.getElementsByName('turns');
var info = document.getElementById('search_info');
var search_but = document.getElementById('search_but');


var imgArry = ['/html/轮播图图片0.jpg','/html/轮播图图片1.jpg','/html/轮播图图片2.jpg','/html/轮播图图片3.jpg'];
var selected = '/html/select_fill.png'
var select = '/html/select.png'

var index = 0;

pre.onclick = function(){
    if(index > 0){
        index--;
    }
    pic.src = imgArry[index];
    select_icon[index+1].src = select;
    select_icon[index].src = selected;

}

next.onclick = function(){
    if(index < 3){
        index++;
    }
    pic.src = imgArry[index];
    select_icon[index-1].src = select;
    select_icon[index].src = selected;

}


setInterval(timeChanges,1000)

function timeChanges(params) {
    select_icon[index].src = select;
    switch (index) {
        case 0: index++
            break;
        case 1: index++;
            break;
        case 2: index++;
            break;
        case 3: index = 0;
            break;
    }

    pic.src = imgArry[index];
    select_icon[index].src = selected;

}

search_but.onclick = function(){
    if(info.value == '1111'){
        alert('错错');
    }
}