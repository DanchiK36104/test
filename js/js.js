var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var main = document.getElementById('main');
var myList = document.getElementById('list');
var ul = document.getElementsByTagName('ul');
var story = myList.getElementsByClassName('item');
var popup = document.getElementsByClassName('popup')[0];
var close = document.querySelector('.close')


console.log(btn1);
console.log(btn2);
console.log(ul);

function addItem() {
	var newLi = document.createElement('li');
	newLi.innerHTML = "Новая задача!";
	newLi.className = 'item';
	myList.appendChild(newLi);
	popup.style.display = 'none';
}
function delItem() {
	myList.removeChild(story[0]);

	if(story.length == 0) {
		popup.style.display = 'block';
	} 
}
function closePopup() {
	popup.style.display = 'none';
}
btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closePopup);

var age = 18;
var age = prompt('Сколько вам лет?');
var name = prompt('Как тебя завут?');

if (age <= 17) {
	alert('Вы несовершеннолетний! Вы не можете посещать этот сайт');
	window.location.href ="http://www.example.com/";

}else if (age >= 18) {
	alert ('Поздравляю,'  + '  ' + name + '  '  + 'вы можете посещать этот сайт! Но для начало...');
	window.open('C:/Users/DANIYAR/Desktop/admin/lesson-18 JavaScript__modifed/index.html');
}

if (confirm('' + '  ' + name + '  '  + 'Вы подписаны на рассылку?')) {
	alert ('Вы можете посещать этот сайт!');
	window.open('C:/Users/DANIYAR/Desktop/admin/lesson-18 JavaScript__modifed/index.html');
}else {
	alert ('Вам надо подписатся на рассылку!');
	window.location.href ="http://www.example.com/";
}


