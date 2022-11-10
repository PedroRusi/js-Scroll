let scroll1 = document.getElementById('scroll1')
scroll1.onclick = () => document.documentElement.scrollTo(300, 500);


let scroll2 = document.getElementById('scroll2')
scroll2.onclick = () => document.documentElement.scrollBy(0, 300);


let scroll3 = document.getElementById('scroll3')
scroll3.onclick = () => document.documentElement.scrollTo(0, document.documentElement.scrollHeight);


let scroll4 = document.getElementById('scroll4')
scroll4.onclick = () => document.documentElement.scrollBy(0, 400);


let scroll5 = document.getElementById('scroll5')
scroll5.onclick = function () {
    if (document.documentElement.scrollTop + 952 == document.documentElement.scrollHeight) { // 952px я беру изза блока с диспреем fixed а ещё из-за отступов
        document.documentElement.scrollTo(0, 100);
    }
}


let elem = document.getElementById('elem')
let scroll6 = document.getElementById('scroll6')
scroll6.onclick = function() {
    elem.style.width = `${elem.clientWidth* 2}px`;
    elem.style.height = `${elem.clientHeight * 2}px`;
    console.log(`${elem.clientHeight * 2}px`);
}