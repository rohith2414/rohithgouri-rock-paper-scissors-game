let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

/*if(!score){
score={
  wins:0,
  Losses:0,
  Ties:0
};
}
*/

console.log();

let isAutoPlaying=false;
let intervalId;

function autoPlay()
{
  if(!isAutoPlaying)
  {
    intervalId=setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying=true;
  }
  
  else
  {
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}

function playGame(playerMove)
{
let result='';

const computer=pickComputerMove();
if(playerMove==='scissors')
{
  if(computer==='rock'){
    result='You lose.';
  }
  else if(computer==='paper')
  {
    result='You win.';
  }
  else if(computer==='scissors'){
    result='Tie.';
  }
}
else if(playerMove==='paper')
{
  if(computer==='rock'){
    result='You win.';
  }
  else if(computer==='paper')
  {
    result='Tie.';
  }
  else if(computer==='scissors'){
    result='You lose';
  }

  
}
else if(playerMove==='rock')
{
  if(computer==='rock'){
    result='Tie.';
  }
  else if(computer==='paper')
  {
    result='You lose.';
  }
  else if(computer==='scissors'){
    result='You win.';
  }
}
if(result==='You win.'){
  score.wins++;

}
else if(result==='You lose.'){
  score.losses++;

}
else if(result==='Tie.'){
  score.ties++;
}

localStorage.setItem('score',JSON.stringify(score));


updateScoreElement();

document.querySelector('.js-result')
  .innerHTML=result;

document.querySelector('.js-move')
  .innerHTML=`You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computer}-emoji.png" class="move-icon">
    Computer`;


}

function updateScoreElement()
{
document.querySelector('.js-score')
.innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}



function pickComputerMove()
{
const randomNumber=Math.random();
let computer=' ';


if(randomNumber>=0 && randomNumber<1/3){
  computer='rock';
}

else if(randomNumber>=1/3 && randomNumber<2/3){
  computer='paper';
}

else if(randomNumber>=2/3 && randomNumber<1){
  computer='scissors';
}

return computer;
}
