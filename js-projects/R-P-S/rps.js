const choice=['rock','paper','scissor'];
const rdisplay=document.getElementById('round');
const userscore=document.getElementById('uscore');
const comscore=document.getElementById('cscore');
const resultdisplay=document.getElementById('result');
let count=1;
let uscore=0;
let cscore=0;
rdisplay.textContent=`Round:${count}`;
userscore.textContent=`user score:${uscore}`;
comscore.textContent=`com score:${cscore}`;

function display(userscore,comscore,result){
    userscore.textContent=`user score:${uscore}`;
    comscore.textContent=`com score:${cscore}`;
    resultdisplay.textContent=result;
}

function round(user,com){
    let result='';
    console.log(user,com);
    if(user==com){
        result='draw';
        console.log(result);
    }
    else{
        switch(user){
            case 'rock':
                result = com==='scissor'? 'WINNER': 'LOSSER';
                console.log(result);
                break;
            case 'scissor':
                result = com==='paper'? 'WINNER': 'LOSSER';
                console.log(result);
                break;
            case 'paper':
                result = com==='rock'? 'WINNER': 'LOSSER';
                console.log(result);
                break;
        }
    }
    switch(result){
        case 'WINNER':
            uscore++;
            comscore.classList.remove('winner');
            comscore.classList.add('loser');
            userscore.classList.remove('loser');
            userscore.classList.add('winner');
            resultdisplay.classList.remove('loser');
            resultdisplay.classList.add('winner');
            break;
        case 'LOSSER':
            cscore++;
            userscore.classList.remove('winner');
            userscore.classList.add('loser');
            comscore.classList.remove('loser');
            comscore.classList.add('winner');
            resultdisplay.classList.remove('winner');
            resultdisplay.classList.add('loser');
            break;
        default:
            comscore.classList.remove('winner','loser');
            userscore.classList.remove('winner','loser');
            resultdisplay.classList.remove('winner','loser');
            cscore++;
            uscore++;
            break;
    }
    display(userscore,comscore,result);
}

function play(user){
    if(count<=5){
        count++;
        const index=Math.floor(Math.random()*3);
        const com=choice[index];
        round(user,com);
        if(count!=6){
            rdisplay.textContent=`Round:${count}`;
        }
    }
    else{
        let gameover='';
        if(uscore>cscore){
            gameover='The user won!!'
        }
        else{
            gameover='The computer won!!'
        }
        alert(gameover);
        location.reload();
    }
}
