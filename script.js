'use strict';

let ans = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function setMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            setMessage("No number! 🚫🚫");
        }
        else {
            console.log(guess);
            if (guess !== ans) {
                if (score <= 0) {
                    setMessage("You Lost 😭");
                    document.querySelector('score').textContent = 0;
                }
                else {
                    score--;
                    if (score == 0) {
                        setMessage("You Lost 😭");
                    }
                    else {
                        setMessage((guess > ans) ? '📈 Too high!' : '📉 Too low!');
                        document.querySelector('.score').textContent = score;
                    }
                }
            }
            else {
                document.querySelector('.number').textContent = ans;
                setMessage("Congratulations!!! 💯💯💯");
                highscore = Math.max(score, highscore);
                document.querySelector('.highscore').textContent = highscore;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
            }
        }
    }
)

document.querySelector('.again').addEventListener(
    'click',
    function () {
        ans = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        setMessage('Start guessing...');
        document.querySelector('.guess').value = null;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
)