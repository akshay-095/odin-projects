const container=document.querySelector('.container');
function create(){
    for(let i=0;i<16;i++){
        const row=document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<16;j++){
            const square=document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
create();
const squares=document.querySelectorAll('.square');
console.log(squares);
squares.forEach(square=>{
    square.addEventListener('mouseover',()=>{
        square.style.background='yellow';
    });
});
/*
*/