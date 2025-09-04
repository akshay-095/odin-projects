const user=["X","O"];
/*for(let i=0;i<10;i++){
    const ran=Math.floor(Math.random()*2);
    console.log(user[ran]);
}
*/
let arr=[];
me=['O','O','O'];
arr.push(me);
me=['O','X','O'];
arr.push(me);
me=['O','X','O'];
arr.push(me);
console.log(arr);
for(let i=0;i<3;i++){
    let c=0;
    while(c<3){
        let v=arr[i][c];
        console.log(v);
        for(let j=i;j<3;j++){
            let d=0;
            while(d<3){
                let u=arr[j][d];
                if(v==u){
                    break;
                }
            }
        }
        c++;
    }
}