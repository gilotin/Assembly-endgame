import "./App.css";

function App() {
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
                <div className="board__letter">T</div>
                <div className="board__letter">E</div>
                <div className="board__letter">S</div>
                <div className="board__letter">T</div>
                <div className="board__letter">W</div>
                <div className="board__letter">O</div>
                <div className="board__letter">R</div>
                <div className="board__letter">D</div>
            </div>

            <div className="game__keyboard">
                <kbd className="keyboard__letter success">A</kbd>
                <kbd className="keyboard__letter fail">B</kbd>
                <kbd className="keyboard__letter">C</kbd>
                <kbd className="keyboard__letter">D</kbd>
                <kbd className="keyboard__letter">E</kbd>
                <kbd className="keyboard__letter">F</kbd>
                <kbd className="keyboard__letter">G</kbd>
                <kbd className="keyboard__letter">H</kbd>
                <kbd className="keyboard__letter">I</kbd>
                <kbd className="keyboard__letter">J</kbd>
                <kbd className="keyboard__letter">K</kbd>
                <kbd className="keyboard__letter">L</kbd>
                <kbd className="keyboard__letter">M</kbd>
                <kbd className="keyboard__letter">N</kbd>
                <kbd className="keyboard__letter">O</kbd>
                <kbd className="keyboard__letter">P</kbd>
                <kbd className="keyboard__letter">Q</kbd>
                <kbd className="keyboard__letter">R</kbd>
                <kbd className="keyboard__letter">S</kbd>
                <kbd className="keyboard__letter">T</kbd>
                <kbd className="keyboard__letter">U</kbd>
                <kbd className="keyboard__letter">V</kbd>
                <kbd className="keyboard__letter">W</kbd>
                <kbd className="keyboard__letter">X</kbd>
                <kbd className="keyboard__letter">Y</kbd>
                <kbd className="keyboard__letter">Z</kbd>
            </div>
            <button className="new-game">New Game</button>
        </main>
    );
}

export default App;
