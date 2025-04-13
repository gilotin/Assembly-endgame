function GameAttempt() {
    const attempts: string[] = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Ruby",
    ];

    return (
        <div className="game__attempt">
            {attempts.map((element, index) => (
                <div key={index} className={`attempts ${element.toLowerCase()}`}>
                    {element}
                </div>
            ))}
            <div key={attempts.length + 1} className="attempts assembly">
                Assembly
            </div>
        </div>
    );
}

export default GameAttempt;
