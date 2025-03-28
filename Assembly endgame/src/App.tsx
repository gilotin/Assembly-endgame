import { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import generateKeyboard from "./utils/generateKeyboard";
import MysticWord from "./components/MysticWord";
import { DataApi, KeyState } from "./types/types";
import createStructuredData from "./utils/createStructureData";

function App() {
    const [mysticWord, setMysticWord] = useState<DataApi[]>([]);
    const [keyState, setKeyState] = useState<KeyState[]>([]);

    useEffect(() => {
        fetch("https://random-word-api.vercel.app/api?words=1&length=8&type=uppercase")
            .then((response) => response.json())
            .then((data: string[]) => {
                const word = data[0];
                const structuredData = createStructuredData(word);
                setMysticWord(structuredData);
            });
    }, []);

    return (
        <main className="game__assembly">
            <section className="game__introduction">
                <h1 className="game__header">Assembly: Endgame</h1>
                <p className="game__description">
                    Guess the word inder 8 attempts to keep the programming world safe from Assembly
                </p>
                <article className="game__progress">
                    <p className="progress__score">"Farewell HTML & CSS"</p>
                </article>
            </section>

            <div className="game__attempt">
                <div className="attempts html">HTML</div>
                <div className="attempts css">CSS</div>
                <div className="attempts javaScript">JavaScript</div>
                <div className="attempts react">React</div>
                <div className="attempts typeScript">TypeScript</div>
                <div className="attempts nodeJs">Node.js</div>
                <div className="attempts python">Python</div>
                <div className="attempts ruby">Ruby</div>
                <div className="attempts assembly">Assembly</div>
            </div>

            <div className="game__board">
                <MysticWord wordData={mysticWord} />
            </div>

            <div className="game__keyboard">
                <Keyboard
                    keyboard={generateKeyboard()}
                    wordData={mysticWord}
                    keyState={keyState}
                    setMysticWord={setMysticWord}
                    setKeyState={setKeyState}
                />
            </div>
            <button className="new-game">New Game</button>
        </main>
    );
}

export default App;
