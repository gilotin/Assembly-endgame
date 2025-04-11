import { MysticWordProps } from "../types/types";

function GenerateWord({ mysticWord: wordData }: MysticWordProps) {
    return (
        <>
            {wordData.map((item, index) => (
                <div key={index} className="board__letter">
                    <span className={item.isActive ? "active" : "hidden"}>{item.value}</span>
                </div>
            ))}
        </>
    );
}

export default GenerateWord;
