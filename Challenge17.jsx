import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    
    const [value, setValue] = React.useState(0)
    
    function decrement(){
        setValue(value-1)
    }
    
    function increment(){
        setValue(value+1)
    }
    
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decrement}>–</button>
                <h2 className="count">{value}</h2>
                <button className="plus" aria-label="Increase count" onClick={increment}>+</button>
            </div>
        </main>
    )
}
