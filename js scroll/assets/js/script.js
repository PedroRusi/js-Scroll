let elem = document.getElementById('elem')

elem.classList.add('www')
console.log(elem.className);



let elem2 = document.getElementById('elem2')

elem2.classList.remove('www')
console.log(elem2.className);



let elem3 = document.getElementById('elem3')

console.log(elem3.classList.contains('www'));



let elem4 = document.getElementById('elem4')

if(elem4.classList.contains('www') == true){
    elem4.classList.remove('www')
    console.log(elem4.classList.contains('www'));
}else{
    elem4.classList.add('www')
    elem4.classList.contains('www')
}



let elem5 = document.getElementById('elem5')

console.log(elem5.classList.length);



let elem6 = document.getElementById('elem6')

for(let i = 0; i < elem6.classList.length; i++){
    alert(elem6.classList[i])
}



let elem7 = document.getElementById('elem7')

elem7.style.cssText = 'color: red; font-size: 30px; border: 2px solid: red'










let elem2_1 = document.querySelector('#elem2-1');
console.log(elem2_1.tagName);


let elem2_2 = document.querySelector('#elem2-2');
console.log(elem2_2.tagName.toLowerCase());


let elems2_3 = document.getElementsByClassName('www3');
for (let elem3 of elems2_3) {
    elem3.innerHTML += elem3.tagName.toLowerCase();
}


let ol = document.getElementById('ol')
let new_li = document.createElement('li');
new_li.innerHTML = 'пункт';
ol.appendChild(new_li);


let ul = document.getElementById('ul');
let array = ['первый элемент', 'второй элемент', 'третий элемент'];
let new_li2
for (let elemArray of array) {
    new_li2 = document.createElement('li');
    new_li2.innerHTML = elemArray;
    ul.appendChild(new_li2);

}




let elem3_1 = document.getElementById('elem3-1')

elem3_1.insertAdjacentHTML("beforeend", "<span>!!!<span>")



let elem3_2 = document.getElementById('elem3-2')

elem3_2.insertAdjacentHTML("afterbegin", "<span>!!!<span>")



let elem3_3 = document.getElementById('elem3-3')

elem3_3.insertAdjacentHTML('beforeend', "<span>!!!<span>")



let parent = document.getElementById("parent")
let button = document.getElementById("button3-1")

button.onclick = function(){
    parent.removeChild(child)
} 



let button2 = document.getElementById("button3-2")
let childList = document.getElementById("childList")


button2.onclick = function(){
    let lastChild = childList.lastElementChild
    childList.removeChild(lastChild)
}



let button3 = document.getElementById("button3-3")

button3.onclick = function(){
    button3.remove()
}



let btn1 = document.getElementById("btn3-1")
let btn2 = document.getElementById("btn3-2")
let btn3 = document.getElementById("btn3-3")

btn1.onclick = function(){
    btn1.remove()
}
btn2.onclick = function(){
    btn2.remove()
}
btn3.onclick = function(){
    btn3.remove()
}






let elem4_1 = document.getElementById('elem4-1');
let firstChild = elem4_1.firstElementChild;
firstChild.style.color = 'red';


let elem4_2 = document.getElementById('elem4-2');
let lastChild = elem4_2.lastElementChild;
lastChild.style.color = 'red';


let elem4_3 = document.getElementById('elem4-3');
let Childs = elem4_3.children;
for (let child of Childs) {
    child.innerHTML += '!'
}


let elem4_4 = document.getElementById('elem4-4');
elem4_4.previousElementSibling.innerHTML += '!'


let elem4_5 = document.getElementById('elem4-5');
elem4_5.nextElementSibling.innerHTML += '!'


let elem4_6 = document.getElementById('elem4-6');
elem4_6.nextElementSibling.nextElementSibling.innerHTML += '!'


let elem4_7 = document.getElementById('elem4-7');
elem4_7.parentNode.style.color = 'red';
elem4_7.style.color = 'black'


let elem4_8 = document.getElementById('elem4-8');
elem4_8.parentNode.parentElement.style.color = 'red';
elem4_8.parentElement.style.color = 'black'






et input = document.getElementById('input')
let button5_1 = document.getElementById('button5-1')

button5_1.onclick = function(){
    let newInput = input.cloneNode;
    document.body.appendChild(newInput);
}



let elem5_2 = document.getElementById('elem5-2')
let button5_2 = document.getElementById('button5-2')

button5_2.onclick = function(){
    console.log(elem5_2.clientTop);
}



let elem5_3 = document.getElementById('elem5-3')
let button5_3 = document.getElementById('button5-3')

button5_3.onclick = function(){
    console.log(elem5_3.clientLeft);
}



let elem5_4 = document.getElementById('elem544')
let button5_4 = document.getElementById('button5-4')

button5_4.onclick = function(){
    console.log(elem5_4.offsetWidth);
}



let elem5_5 = document.getElementById('elem5-5')
let button5_5 = document.getElementById('button5-5')

button5_5.onclick = function(){
    console.log(elem5_5.offsetHeight);
}





let elem6_1 = document.querySelector('#elem6-1');
let elemstyle = getComputedStyle(elem6_1);
console.log(elemstyle.width);


let elem6_2 = document.querySelector('#elem6-2');
let btn6_2 = document.getElementById('btn6-2');
btn6_2.onclick = function() {
    console.log(elem6_2.scrollTop);
}


let elem6_3 = document.querySelector('#elem6-3');
let btn6_3 = document.getElementById('btn6-3');
btn6_3.onclick = function() {
    console.log(elem6_3.scrollLeft);
}


let elem6_4 = document.querySelector('#elem6-4');
let btn6_4 = document.getElementById('btn6-4');
btn6_4.onclick = function() {
    elem6_4.scrollTo(0, -100)
}


let elem6_5 = document.querySelector('#elem6-5');
let btn6_5 = document.getElementById('btn6-5');
btn6_5.onclick = function() {
    elem6_5.scrollBy(0, 100);
}







let elem5_6 = document.getElementById('elem5-6')
let button5_6 = document.getElementById('button5-6')

button5_6.onclick = function(){
    console.log(elem5_6.clientWidth);
}



let elem5_7 = document.getElementById('elem5-7')
let button5_7 = document.getElementById('button5-7')

button5_7.onclick = function(){
    console.log(elem5_7.clientHeight);
}



let elem7_1 = document.getElementById('elem7-1')
let button7_1 = document.getElementById('button7-1')

button7_1.onclick = function(){
    console.log(elem7_1.scrollHeight);
}



let elem7_2 = document.getElementById('elem7-2')
let button7_2 = document.getElementById('button7-2')

button7_2.onclick = function(){
    console.log(elem7_2.scrollWidth);
}



let elem7_3 = document.querySelector('#elem7-3')
let button7_3 = document.getElementById('button7-3')
let height = elem7_3.scrollHeight - 100

button7_3.onclick = function(){elem7_3.scrollTo(0, height)}
