let min = 15,
    max = 20,
    winningNum = Math.floor(Math.random()*(max-min+1)+ min),
    GuessLeft = 3;

const game = document.querySelector('#game'),
      minnum = document.querySelector('.min-num'),
      maxnum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessButton = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');


    minnum.textContent = min;
    maxnum.textContent = max;

game.addEventListener('mousedown',play_again);
guessButton.addEventListener('click',start);

function play_again(e)
{
    if(e.target.className === 'play-again')
    {
        window.location.reload();
    }
}

function start()
{
    const guess = parseInt(guessInput.value);
    
    if(isNaN(guess) || guess < min || guess > max)
    {
        setMessage(`Enter number between ${min} and ${max}`,'red','red');
    }
    else if(guess === winningNum)
    {
        setMessage(`${winningNum} is correct . YOU WON!`,'green','green');
        guessInput.disabled = true;
        guessButton.value = 'Play Again';
        guessButton.className += 'play-again';
        
    }
    else
    {   GuessLeft--;
            
            if(GuessLeft === 0)
            {
                setMessage(`You Lost! Correct number was ${winningNum}`,'red','red');
                guessInput.disabled = true;
                guessButton.value = 'Play Again';
                guessButton.className += 'play-again';
                
            }
            else
            {
                guessInput.value = '';
                setMessage(`${guess} is wrong. ${GuessLeft} guesses left`,'red','red');
            }
    }
}

function setMessage(msg,txtcolor,bgcolor)
{
    message.textContent = msg;
    message.style.color = txtcolor;
    guessInput.style.borderColor = bgcolor;
}