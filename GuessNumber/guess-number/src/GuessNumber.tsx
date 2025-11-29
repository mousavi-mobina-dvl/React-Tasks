import { useState } from 'react';
import './GuessNumber.tsx'; // <-- Import the CSS file

const GuessNumber = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const [targetNumber] = useState(getRandomNumber);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    const handleGuess = () => {
        const userGuess = parseInt(guess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            setMessage("Please enter a valid number between 1 to 100.");
        } else if (userGuess < targetNumber) {
            setMessage("The target number is bigger than your guess.");
        } else if (userGuess > targetNumber) {
            setMessage("The number is less than your guess.");
        } else {
            setMessage("Excellent! Your guess is correct :)");
        }

        setGuess("");
    };

    return (
        <div className="guess-container">
            <h2>Guess a number between 1 to 100 :</h2>

            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
            />

            <button onClick={handleGuess}>Guess</button>

            <p>{message}</p>
        </div>
    );
};

export default GuessNumber;
