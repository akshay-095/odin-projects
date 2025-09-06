let gameboard =['','','','','','','','',''];
const select=document.getElementById('select');
function swap(){
}
function game(user1){
    let user2='';
    if(user1=='X'){
        user2='O';
    }
    else{
        user2='X';
    }
    console.log(user1,user2);
    const max=gameboard.length;
    console.log(max);
    for(let i=0;i<max;i++){
        if(i%2==0){
            gameboard[i]=user1;
        }
        else{
            gameboard[i]=user2;
        }
    }
    console.log(gameboard);
}
select.addEventListener('click',()=>{
    const selectedchoice=document.querySelector('input[name="choice"]:checked').value;
    const board=document.getElementById('board');
    board.style.display='flex';
    game(selectedchoice);

})