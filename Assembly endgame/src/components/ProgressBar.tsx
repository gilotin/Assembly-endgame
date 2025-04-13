import { gameText } from "../constants/gameText";
import { GameCondition } from "../types/types";

function ProgressBar({ gameCondition }: { gameCondition: GameCondition }) {
    if (gameCondition.winCondition) {
        return (
            <article className="game__progress score__win">
                <p className="progress__score">Congrats you won!!!</p>
            </article>
        );
    }

    if (gameCondition.failCondition === undefined) {
        return;
    } else {
        return (
            <article className="game__progress">
                <p className="progress__score">
                    {gameCondition.failCondition < 8
                        ? gameText[gameCondition.failCondition]
                        : "You lose! Better start learning Assembly 😭"}
                </p>
            </article>
        );
    }
}

export default ProgressBar;
