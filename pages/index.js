import { useState } from "react"

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Counter/>
            <p>Página legal :D</p>
        </div>
    )
}


function Counter() {
    const [ currentNumber, setCurrentNumber ] = useState(0)

    function addNumberInCounter() {
        setCurrentNumber(currentNumber + 1)
    }

    return (
        <div>
            <p>{currentNumber}</p>
            <button onClick={addNumberInCounter}>Adicionar</button>
        </div>
    )
}


export default Home