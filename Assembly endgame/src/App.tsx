import { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import generateKeyboard from "./utils/generateKeyboard";
import VisualizeWord from "./components/VisualizeWord";
import { DataApi, GameCondition, KeyState } from "./types/types";
import createStructuredData from "./utils/createStructureData";
import checkGameCondition from "./utils/checkGameCondition";
import GameAttempt from "./components/GameAttempt";
import ProgressBar from "./components/ProgressBar";

function App() {
    const [mysticWord, setMysticWord] = useState<DataApi[]>([]);
    const [keyState, setKeyState] = useState<KeyState[]>([]);
    const [gameConditionState, setGameConditionState] = useState<GameCondition>({});

    useEffect(() => {
        fetchNewWord();
    }, []);

    useEffect(() => {
        setGameConditionState(checkGameCondition(keyState, mysticWord));
    }, [keyState]);

    function fetchNewWord() {
        fetch("https://random-word-api.vercel.app/api?words=1&length=6&type=uppercase")
            .then((response) => response.json())
            .then((data: string[]) => {
                const word = data[0];
                const structuredData = createStructuredData(word);
                setMysticWord(structuredData);
            });
    }

    function resetState() {
        setMysticWord([]);
        setKeyState([]);
        setGameConditionState({});
        fetchNewWord();
    }

    return (
        <main className="game__assembly">
            <section className="game__introduction">
                <h1 className="game__header">Assembly: Endgame</h1>
                <p className="game__description">
                    Guess the word inder 8 attempts to keep the programming world safe from Assembly
                </p>
            </section>
            <ProgressBar gameCondition={gameConditionState} />

            <GameAttempt gameCondition={gameConditionState} />

            <div className="game__board">
                <VisualizeWord mysticWord={mysticWord} />
            </div>

            <div className="game__keyboard">
                <Keyboard
                    keyboard={generateKeyboard()}
                    mysticWord={mysticWord}
                    keyState={keyState}
                    failCondition={gameConditionState?.failCondition}
                    setMysticWord={setMysticWord}
                    setKeyState={setKeyState}
                />
            </div>
            {gameConditionState.failCondition === 8 || gameConditionState.winCondition ? (
                <button onClick={resetState} className="new-game">
                    New Game
                </button>
            ) : null}
        </main>
    );
}

export default App;
