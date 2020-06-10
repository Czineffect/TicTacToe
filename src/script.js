/**
 * @author Colton Thompson 
 */
const winnningCombos = [
	[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 
const player1 = {"name": "X", "color":"#1E90FF"} 
const player2 = {"name": "O", "color":"#20B2AA"} 
const squares = document.querySelectorAll(".square"); 
const message = document.querySelector("#winner"); 
var currentPlayer = player1;   

function clickHandler(e){
	if(!e.target.innerHTML)
	{
		e.target.style.color = currentPlayer.color;
		e.target.innerHTML = currentPlayer.name;
		checkForWinner(squares, currentPlayer)
	
		if(currentPlayer === player1) {
			currentPlayer = player2
		}
		else{
			currentPlayer = player1; 
		}

		if(checkPossibleMoves())
		{
			message.innerHTML = "DRAW"
		}
	}

}
//Add click functionality for each square on the grid 
for(let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function(e){ clickHandler(e)}, false); 
}

//Check winner 
function checkForWinner(squares, player)
{

	for(let i = 0; i < winnningCombos.length; i++) 
	{
		const [a,b,c] = winnningCombos[i];
		if(squares[a].innerText === squares[b].innerText && squares[b].innerText === squares[c].innerText && squares[c].innerText === player.name) 
		{
			squares[a].classList.add("strike"); 
			squares[b].classList.add("strike"); 
			squares[c].classList.add("strike");
			message.innerText = player.name + " WON!"
			break;
		}
		
	}
}
//Check if there's no more possible moves 
function checkPossibleMoves()
{
	if(squares[0].innerHTML && squares[1].innerHTML && squares[2].innerHTML && squares[3].innerHTML &&
	squares[4].innerHTML && squares[5].innerHTML && squares[6].innerHTML && squares[7].innerHTML && squares[8].innerHTML){
		return true;
	}
}
//Remove text and css classes from grids
function restartGame()
{
	squares.forEach(function(e){
		e.innerText="";
		e.classList.remove("strike")
	})
	message.innerText="";
	currentPlayer = player1; 
}
