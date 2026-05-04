import { useState } from "react"

function App() {
 
  const [color , setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200 flex justify-center" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 bg-white p-3 rounded-4xl gap-3 ml-4 mr-4">
        <button className="outline-none rounded-full py-1 px-4 text-white" style={{backgroundColor : "red"}}
        onClick={() => setColor("red")}>Red</button>
        <button className="outline-none rounded-full py-1 px-4 text-white" style={{backgroundColor : "green"}}
        onClick={() => setColor("green")}>Green</button>
        <button className="outline-none rounded-full py-1 px-4 text-white" style={{backgroundColor : "blue"}}
        onClick={() => setColor("blue")}>Blue</button>
        <button className="outline-none rounded-full py-1 px-4 text-white" style={{backgroundColor : "olive"}}
        onClick={() => setColor("olive")}>Olive</button>
        <button className="outline-none rounded-full py-1 px-4 text-white" style={{backgroundColor : "gray"}}
        onClick={() => setColor("gray")}>Gray</button>
        <button className="outline-none rounded-full py-1 px-4 text-black" style={{backgroundColor : "yellow"}}
        onClick={() => setColor("yellow")}>Yellow</button>
        <button className="outline-none rounded-full py-1 px-4 text-black" style={{backgroundColor : "pink"}}
        onClick={() => setColor("pink")}>Pink</button>
        <button className="outline-none rounded-full py-1 px-4 text-black" style={{backgroundColor : "lavender"}}
        onClick={() => setColor("lavender")}>Lavender</button>
        <button className="outline-none rounded-full py-1 px-4 text-black" style={{backgroundColor : "white"}}
        onClick={() => setColor("white")}>White</button>
        <button className="outline-none rounded-full py-1 px-4 text-white" style={{backgroundColor : "black"}}
        onClick={() => setColor("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
