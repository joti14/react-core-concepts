import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [noBall, setNoBall] = useState(0);

    const handleSingles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFours = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleSixes = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }

    const handleBalls = () => {
        const updatedBalls = balls + 1;
        setBalls(updatedBalls);
    }
    const handleNoBalls = () => {
        setNoBall(true);
    }
    return (
        <div>
            <h3>Player: Bangladesh Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You score 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleFours}>Fours</button>
            <button onClick={handleSixes}>Sixes</button>

            <h3>Balls: {balls}</h3>
            {
                noBall && <p>It's a NO BALL!!</p>
            }
            <button onClick={handleBalls}>Ball</button>
            <button onClick={handleNoBalls}>No Ball</button>
        </div>
    )
}