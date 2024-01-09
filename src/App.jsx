import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className="w-fill h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2 bg-white">
        <div className="flex flex-wrap justify-center
         gap-3 shadow-lg  bg-black px-3 py-2 rounded-3xl">

         <button 
          onClick={()=> setColor("red")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"red"}}
         >red</button>
         <button 
          onClick={()=> setColor("coral")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"coral"}}
         >coral</button>
         <button
          onClick={()=> setColor("Orange")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"Orange"}}
         >Orange</button>
         <button
          onClick={()=> setColor("Green")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"Green"}}
         >Green</button>
         <button
          onClick={()=> setColor("blue")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"blue"}}
         >blue</button>
         <button
          onClick={()=> setColor("Indigo")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"Indigo"}}
         >Indigo</button>
         <button
          onClick={()=> setColor("Violet")}
          className=" outline-none px-4 rounded-lg text-white shadow-xl"
         style={{backgroundColor:"Violet"}}
         >Violet</button>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
