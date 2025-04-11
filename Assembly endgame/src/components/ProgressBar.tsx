import { gameText } from "../constants/gameText";
import { GameCondition } from "../types/types";

function ProgressBar({ failCondition }: GameCondition) {
    if (failCondition === undefined) {
        return;
    } else {
        return (
            <p className="progress__score">
                {failCondition < 8
                    ? gameText[failCondition]
                    : "You lose! Better start learning Assembly 😭"}
            </p>
        );
    }
}

export default ProgressBar;

// To check for bugs
