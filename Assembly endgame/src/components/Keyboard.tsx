import { KeyboardProps } from "../types/types";

function Keyboard({ keyboard }: KeyboardProps) {
    function onClickKey(e: React.MouseEvent<HTMLElement>) {
        const keyID = e.currentTarget.id;
        console.log(e.currentTarget);
    }

    return (
        <>
            {keyboard.map((key) => (
                <kbd
                    onClick={(e) => onClickKey(e)}
                    key={key.id}
                    id={key.id}
                    className="keyboard__letter"
                >
                    {key.key.toLocaleUpperCase()}
                </kbd>
            ))}
        </>
    );
}

export default Keyboard;
