
import './index.css';
import React from "react"
import {useState,useEffect} from "react"
function App() {
  const [cal,setCal]=useState("");
  const [result,setResult]=useState("");
  const operators=['/','*','-','+','.']
  const digits=[];
 let zeros=false
  useEffect(()=>{
 if(result==="error"){
    setCal("")
 }

  },[cal])
 
 const handleClick=(e)=>{
  

  if(operators.includes(e)&&cal===""||operators.includes(e)&&operators.includes(cal.slice(-1))||(cal.length===0&&e==='0'))
  {
    return ;
  }
  if(!operators.includes(e)){
    console.log([cal,e])
    setResult(eval(cal+e).toString())
  }
  
  setCal(cal+e);
   console.log(cal)
 
 }
 const showResult=()=>{
   if(operators.includes(cal.slice(-1)))
   {console.log("in error")
     setResult("error");
     setCal("error")
     return 
   }
  
   if(cal=="")
   {
     setResult("")
   }
   else

   {
     
    setCal(eval(cal).toString());
   setResult(eval(cal))
   }
 }
 const generateDigits=()=>{

for(let i=1;i<10;i++)
digits.push(<button key={i} onClick={()=>handleClick(i.toString())}>{i}</button>);
return digits

 }
  
  return (
 
   
     <div className="App">
     <div className="calculator">
       <div className="display">
       {result ? <span>({result})</span>:<span>(0)</span>}  {cal||'0'}
       </div>
       <div className="operators">
         <button label="*" onClick={()=>handleClick("*")}>*</button>
         <button onClick={()=>handleClick("+")}>+</button>
         <button onClick={()=>handleClick("/")}>/</button>
         <button onClick={()=>handleClick("-")}>-</button>
         <button onClick={()=>{
         if(cal=="")
         { return;

         }
         else return setCal(cal.slice(0,-1))
         }}>DEL</button>
         <button onClick={()=>{
           setCal('');
           setResult('')
         }}>C</button>
       </div>
       <div className="digits">
            {generateDigits()}
            <button onClick={()=>handleClick("0")}>0</button>
            <button onClick={()=>handleClick(".")}>.</button>
         <button onClick={()=>showResult("=")}>=</button>
       </div>
 

       </div>

     </div>
     
    
  );
}

export default App;
