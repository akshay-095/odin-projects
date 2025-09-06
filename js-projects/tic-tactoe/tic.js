let gameboard =['','','','','','','','',''];
const select=document.getElementById('select');
const boxes=document.querySelectorAll('.box');
function checkwinner(){
    const winnercombination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(const comb of winnercombination){
        const [a,b,c]=comb;
        if(gameboard[a]!='' && gameboard[a]===gameboard[b] && gameboard[a]===gameboard[c]){
            return gameboard[a];
        }
    }
    if(!gameboard.includes('')){
        return 'draw';
    }
    return null
}
function game(){
    boxes.forEach((box,index) =>{
        box.addEventListener('click',()=>{
            if(gameboard[index]==='' && currentuser!=''){
            gameboard[index]=currentuser;
            box.textContent=currentuser;
            box.style.backgroundColor=(currentuser==='X')? 'red':'blue';
            const winner=checkwinner();
            if(winner=='draw'){
                alert(`it is a ${winner}!!!`)
                return;
            }
            else if(winner!=null){
                alert(`${winner} has won!!!`)
                return
            }
            currentuser=(currentuser==='X')? 'O':'X';
            console.log(gameboard);
        }
        });
    });
}
select.addEventListener('click',()=>{
    const selectedchoice=document.querySelector('input[name="choice"]:checked');
    const board=document.getElementById('board');
    if(selectedchoice){
        board.style.display='flex';
        currentuser=selectedchoice.value;
        game(selectedchoice);
    }
    else{
        alert('please select X or O to start');
    }
});
