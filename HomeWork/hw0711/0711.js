
// Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

let sayMessage = document.querySelector('.btn1');
sayMessage.onclick = function() {
	console.log("Привет");	
	alert("Привет");	
};

// Создайте блок в html c картинкой и кнопку. 
// При нажатии на кнопку блок с картинкой должен получать 
// border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. 
// Реализуйте через classList.toggle()



let clickBtn = document.querySelector('.btn2');
let showHideBorder = document.querySelector('.block2');

clickBtn.addEventListener('click', showHideBlock); 

function showHideBlock(event) {
	showHideBorder.classList.toggle('block2-show'); 
	showHideBorder.classList.toggle('block2-hide'); 
}