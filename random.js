var arrowGenerator = document.getElementById('clickArea');

var leftArrow = document.getElementById('left');
var rightArrow = document.getElementById('right');

arrowGenerator.addEventListener("click", function(){
	var randomImage = Math.floor(Math.random() * 6)+ 1;
		if (randomImage <= 3){
			rightArrow.classList.add('hidden');
			leftArrow.classList.remove('hidden');
			console.log(randomImage);
		} else if(randomImage >= 4){
			leftArrow.classList.add('hidden');
			rightArrow.classList.remove('hidden');
			console.log(randomImage);
		}
})






