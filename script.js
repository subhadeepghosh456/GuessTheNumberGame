let secrectNumber = Math.trunc(Math.random()*20)+1;
console.log(secrectNumber);

let highScore = 0;

let score = 20;

document.querySelector('.check').addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = '🤔 No Number!'
    }
    else if(guess==secrectNumber){
        document.querySelector('.message').textContent = 'Correct Number😊'
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secrectNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess > secrectNumber){
        // score--; 
        // document.querySelector('.message').textContent = 'Number is Too High'
        // document.querySelector('.score').textContent = score;

        if(score<=0){
            document.querySelector('.message').textContent = 'You Lost The Game😛'
        }else{
            score--;
        document.querySelector('.message').textContent = 'Number is Too High';
        document.querySelector('.score').textContent = score;
        }
    }

    else if(guess < secrectNumber){
        // score--;
        // document.querySelector('.message').textContent = 'Number is Too Low';
        // document.querySelector('.score').textContent = score;

        if(score<=0){
            document.querySelector('.message').textContent = 'You Lost The Game😛'
        }else{
        score--;
        document.querySelector('.message').textContent = 'Number is Too Low';
        document.querySelector('.score').textContent = score;
        }
    }

})

document.querySelector('.again').addEventListener('click',()=>{
    score = 20;
    secrectNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';




})