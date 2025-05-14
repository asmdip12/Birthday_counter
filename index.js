function updatecounter(){
let d=new Date();
let bd=new Date("2025-10-31");
let dl=bd-d;
let dl1=Math.floor(dl/(1000*60*60*24))
let hl=Math.floor(dl/(1000*60*60))-Math.floor(dl/(1000*60*60*24))*24
let ml=Math.floor(dl/(1000*60))-Math.floor(dl/(1000*60*60*24))*24*60-hl*60

let sl=Math.floor(dl/(1000))-Math.floor(dl/(1000*60*60*24))*24*60*60-hl*60*60-ml*60
let msl=Math.floor(dl)-Math.floor(dl/(1000*60*60*24))*24*60*60*1000-hl*60*60*1000-ml*60000-sl*1000
console.log("Days Left:",dl1);
console.log("Hours Left:",hl);

console.log("m Left:",ml);

console.log("s Left:",sl);

console.log("msl Left:",msl);
document.getElementById("countdown").innerHTML =
    `${dl1}d ${hl}h ${ml}m ${sl}s ${msl}ms`;
}
setInterval(updatecounter, 50);