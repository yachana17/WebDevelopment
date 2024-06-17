let  no =Math.floore(Math.random()*100)+1;
let attemptLeft =3;

function check(){
    const guess = Number(doucument.getElementById('guessInput').value);
    
    const resultMessage = document.getElementById('result');

    const attemptMessage = document.getElementById('attempt');
    if(attemptLeft>1 ){
        if(guess==no){
            resultMessage.textContent='Congreats! correct guess';
            disableGame();
        }

        else{
            attemptLeft--;
            resultMessage.textContent=guess>no?"Higher":"Lower";
            attemptMessage.textContent='Attempt Left:${attemptLeft}';

        }
        
    }
    else{
        resultMessage.textContent="attempts exhausted";
        disableGame();    
    }
    function disableGame(){
        document.getElementById('guessInput').disabled=true;
        document.querySelector('button[onclick="check()"]').disabled=true;
    }
}