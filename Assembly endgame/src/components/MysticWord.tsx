import { MysticWordProps } from "../types/types";

function mysticWord({ wordData }: MysticWordProps) {
    let placeholder: string[] = [];

    for (let i = 0; i < wordData.length; i++) {
        placeholder.push(wordData[i]);
    }
    //  how to hide and check the letters
    return (
        <>
            {placeholder.map((x, index) => (
                <div key={index} className="board__letter">
                    <span className="hidden">{x}</span>
                </div>
            ))}
        </>
    );
}

export default mysticWord;
