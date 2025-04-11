import { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import generateKeyboard from "./utils/generateKeyboard";
import VisualizeWord from "./components/VisualizeWord";
import { DataApi, KeyState } from "./types/types";
import createStructuredData from "./utils/createStructureData";
import checkNumberOfTries from "./utils/checkNumberOfTries";
import { gameText } from "./constants/gameText";
import GameAttempt from "./components/GameAttempt";

function App() {
    const [mysticWord, setMysticWord] = useState<DataApi[]>([]);
    const [keyState, setKeyState] = useState<KeyState[]>([]);
    const [tryCounter, setTryCounter] = useState<number>(0);

    useEffect(() => {
        fetch("https://random-word-api.vercel.app/api?words=1&length=6&type=uppercase")
            .then((response) => response.json())
            .then((data: string[]) => {
                const word = data[0];
                const structuredData = createStructuredData(word);
                setMysticWord(structuredData);
            });
    }, []);

    useEffect(() => {
        setTryCounter(checkNumberOfTries(keyState));
    }, [keyState]);

    return (
        <main className="game__assembly">
            <section className="game__introduction">
                <h1 className="game__header">Assembly: Endgame</h1>
                <p className="game__description">
                    Guess the word inder 8 attempts to keep the programming world safe from Assembly
                </p>
                <article className="game__progress">
                    <p className="progress__score">
                        {tryCounter < 8
                            ? gameText[tryCounter]
                            : "You lose! Better start learning Assembly 😭"}
                    </p>
                </article>
            </section>

            <GameAttempt />

            <div className="game__board">
                <VisualizeWord mysticWord={mysticWord} />
            </div>

            <div className="game__keyboard">
                <Keyboard
                    keyboard={generateKeyboard()}
                    mysticWord={mysticWord}
                    keyState={keyState}
                    tryCounter={tryCounter}
                    setMysticWord={setMysticWord}
                    setKeyState={setKeyState}
                />
            </div>
            {tryCounter >= 8 ? <button className="new-game">New Game</button> : null}
        </main>
    );
}

export default App;
