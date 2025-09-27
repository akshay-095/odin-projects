const display=document.getElementById('display');
let firstnum=0;
let currentnum='';
let op='';
function sub(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function add(x,y){
    return x+y;
}
function calculate(){
    const secnum=Number(currentnum);
    let result=0;
    switch(op){
        case '+':
            result=add(firstnum,secnum);
            break;
        case '-':
            result=sub(firstnum,secnum);
            break;
        case '*':
            result=multiply(firstnum,secnum);
            break;
        case '/':
            resutlt=divide(firstnum,secnum);
            break;
    }
    firstnum=result;
    currentnum=String(result);
    op='';
    display.value=result;
}
function adddisplay(x){
    if(x==='='){
        if(op && currentnum!==''){
            calculate();
        }
        return;
    }
    if(!isNaN(x)||x==='.'){
        if(x==='.' && currentnum.includes('.')){
            return;
        }
        currentnum+=x;
        display.value=currentnum;
    }
    else{
        if(firstnum!==0 && currentnum!=='' && op!==''){
            calculate();
            op=x;
        }
        else if(currentnum!==''){
            firstnum=Number(currentnum);
            op=x;
            currentnum='';
        }
        display.value=x;
    }
}

function cleardisplay(){
    firstnum=0;
    currentnum='';
    op='';
    display.value='';
}