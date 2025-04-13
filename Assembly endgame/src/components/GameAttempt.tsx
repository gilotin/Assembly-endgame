import { GameCondition } from "../types/types";

function GameAttempt({ gameCondition }: { gameCondition: GameCondition }) {
    const attempts: string[] = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "NodeJS",
        "Python",
        "Ruby",
    ];

    return (
        <div className="game__attempt">
            {attempts.map((element, index) => {
                if (gameCondition.failCondition && index < gameCondition.failCondition) {
                    return (
                        <div key={index} className={`attempts ${element.toLowerCase()} fail `}>
                            {element}
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className={`attempts ${element.toLowerCase()}`}>
                            {element}
                        </div>
                    );
                }
            })}
            <div key={attempts.length + 1} className="attempts assembly">
                Assembly
            </div>
        </div>
    );
}

export default GameAttempt;
