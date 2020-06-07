//const grid = document.querySelectorAll('.square');
//console.log(grid);
//

function clickHandler(){

	console.log("Something happened"); 
}
const squares = document.getElementsByClassName("square"); 
console.log(squares);
for(let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function(){ clickHandler()}, false); 
}


