
let count = 0;

function add() {
    count ++;
    document.getElementById("heading1"). innerHTML = count;
}function resert() {
    count=0;
    document.getElementById("heading1"). innerHTML = count;
}
function incresmnt() {
    count+=2;
    document.getElementById("heading1"). innerHTML = count;
}
function table() {
let tablenum=0;
for(let tablenum=1; tablenum<11; tablenum++)
 document.getElementById("heading1"). innerHTML+= `2 x ${tablenum} = ${tablenum*2} <br>`;
}
