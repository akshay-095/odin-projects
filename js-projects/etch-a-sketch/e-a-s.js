const container=document.querySelector('.container');
function rel(){
    location.reload();
}
function create(num){
    for(let i=0;i<num;i++){
        const row=document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<num;j++){
            const square=document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
function start(){
    const num=document.getElementById('num').value;
    create(num);
    const size=(960/num);
    const squares=document.querySelectorAll('.square');
    console.log(squares);
    squares.forEach(square=>{
        square.style.width=`${size}px`;
        square.style.height=`${size}px`;
    })
    squares.forEach(square=>{
        square.addEventListener('mouseover',()=>{
        square.style.background='yellow';
    });
});
}


