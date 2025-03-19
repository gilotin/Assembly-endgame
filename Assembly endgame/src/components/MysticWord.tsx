import { MysticWordProps } from "../types/types";

function mysticWord({ wordData }: MysticWordProps) {
    return (
        <>
            {wordData.map((item, index) => (
                <div key={index} className="board__letter">
                    <span className="hidden">{item.value}</span>
                </div>
            ))}
        </>
    );
}

export default mysticWord;
