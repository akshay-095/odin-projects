const choice=['rock','paper','scissor'];
let count=0;
function play(user){
    console.log(user);
    while(count!=5){
        const index=Math.floor(Math.random()*3);
        const com=choice[index];
        console.log(user,com);
        count++;
    }
}
function round(user,com){
    console.log(user,com);
}