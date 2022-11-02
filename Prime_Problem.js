function checkPrime(num){
let count=0;
 for(let i=2; i<num; i++){
    if(num%i){
      count++;

}
  return count;
}

let ans=checkPrime(13);
if(count>0){
  console.log("Prime Number");
}else{
  console.log("Not a Prime Number");
}