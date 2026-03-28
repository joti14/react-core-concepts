import { useState } from "react"

export default function Toggle() {
    const [showGreetings, setShowGreetings] = useState(false);
    const toggleGreetings = () => {
        setShowGreetings(!showGreetings)
    }

    return (
        <div>           
            <button onClick={toggleGreetings}>Toggle Greetings</button>
            {showGreetings && <h2>Hello, React Learner!</h2>}
        </div>
    )
}