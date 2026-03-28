import { useState } from "react"

export default function CounterApp(){
    const [count, setCount] = useState(0);
    
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div className="card">
            <h3>Count: {count}</h3>
            <button onClick={handleIncrease}>Increase +1</button>
            <button onClick={handleDecrease}>Decrease -1</button>
        </div>
    )
}