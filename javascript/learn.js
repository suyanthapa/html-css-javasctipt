//Basic function
function myFun(){
  console.log("I am sudan thapa");
}
myFun();

//parameter
function myFun2(msg){
  console.log(msg);
}
myFun2("Message Created "); 

// Multiple parameter
function myFun3(x,y){
  x=1;
  y=4;
  add= x+y;
  return add;
}
let var1=myFun3();
console.log(var1);


// Arrow Function
const var2= (a,b)=> {
  console.log(a+b);
}

//Practice-1
// Create a function using the"function" keywrod that takes a string as an argument and returns the number of cvowels un the string

  function countVowels(str){
    let count=0;
    for(const char of str){
    
      if(char==="a"|| char=="e"){
        count++;
      }
    }
    console.log(count);
  }
  //Practice-2
  // Create an arrowFunction to perform the same task
  const count1=(str)=>{
    let count=0;
    for(const char of str){
      
      if(char==="a"|| char=="e"){
        count++;
      }
    }
    console.log(count);
    }

    //forEach loop in array
    let arr=["suyan", "sudan"];
    arr.forEach((val)=>{
      console.log(val);
    });

    //Practice
    let nums=[2,4,6,8];
    nums.forEach((num)=>{
      console.log(num*num);
    })  