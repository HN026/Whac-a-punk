const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const level = document.querySelector('#level');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let Level = 1;

function randomSquares(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    
  
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id === hitPosition)
        {
            result += 10;
            score.textContent = result;
            hitPosition = null;
        }
    })
})



function moveMole(){
    
    timerId = setInterval(randomSquares, 400);
}

moveMole();

function countDown(){
 currentTime--;
 timeLeft.textContent = currentTime;


 if(currentTime == 45)
 {
    IncreaseLevel2();
 }

 if(currentTime == 25)
 {
    IncreaseLevel3();
 }
 
 
 if (currentTime == 0)
 {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    if(result>500)
    {
        alert('GAME OVER! You won, Your score is: ' + result);
    }
    else
    {
        alert('GAME OVER! You lost, Your score is: ' + result);
    }
 }
  

}

function IncreaseLevel2()
{
    if(result>100)
    {
        timerId = setInterval(randomSquares, 200);
        Level++;
        level.textContent = Level;

    }
}

function IncreaseLevel3()
{
    if(result>300)
    {
        timerId = setInterval(randomSquares, 300);
        Level++;
        level.textContent = Level;

    }
}



let countDownTimerId = setInterval(countDown,1000)

