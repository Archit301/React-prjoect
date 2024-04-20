import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState()

  function handleButtonClick(val){
    setValue((prev)=>prev+val)
  }
  const calculateResult=()=>{
    try{
    const result=eval(value)
    setValue(result.toString());
    }
    catch (error){
      setValue('Error');
    }
  }

  return (
    <>
    <div className=" bg-gray-700  w-80 mx-auto mt-10 p-4 rounded-lg shadow-lg  ">
      <div className="">
        <input  type='text' 
        className="outline-none w-full py-7 px-2 bg-black  rounded-xl    text-white"
        value={value}
        readOnly
        />
        </div>
       <div className=" w-full flex flex-wrap justify-evenly" >
       <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4"  onClick={() => setValue('')}   >AC</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={() => setValue(value.slice(0, -1))}   >DE</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={calculateResult}  >=</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "  onClick={()=>handleButtonClick('7')} >7</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('8')}    >8</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('9')} >9</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('4')}  >4</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "onClick={()=>handleButtonClick('5')} >5</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "  onClick={()=>handleButtonClick('6')} >6</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "  onClick={()=>handleButtonClick('1')} >1</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('2')}  >2</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('3')} >3</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "onClick={()=>handleButtonClick('/')}>/</button>
    
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "  onClick={()=>handleButtonClick('*')} >*</button>
   
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('+')}  >+</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('-')} >-</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "onClick={()=>handleButtonClick('00')}>00</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 "onClick={()=>handleButtonClick('0')}>0</button>
      <button className="bg-slate-600 m-4 py-2 px-5 space-x-3 rounded-md mt-4 " onClick={()=>handleButtonClick('.')} >.</button>
       </div>
       </div>
    </>
  )
}

export default App
