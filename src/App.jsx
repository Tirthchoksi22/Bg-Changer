import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lavender")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='flex justify-center font-bold text-3xl'>Welcome To Bg-Changer App</div>
        <div className='fixed flex flex-wrap justify-center bottom-12 px-3 inset-x-2'>
          <div className='fixed flex flex-wrap justify-center gap-6 shadow-xl rounded-lg px-3 py-1 bg-white'>
            <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-lg'
            style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-lg'
            style={{backgroundColor:"green"}}>Green</button>
            
            <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-lg'
            style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=> setColor("olive")} className='outline-none px-4 py-1 rounded-lg'
            style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-lg'
            style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=> setColor("darkblue")} className='outline-none px-4 py-1 rounded-lg'
            style={{backgroundColor:"DarkBlue"}}>Dark Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
