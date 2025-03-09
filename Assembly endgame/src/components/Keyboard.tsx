import { KeyboardProps } from "../types/types";

function Keyboard({ keyboard }: KeyboardProps) {
    return (
        <>
            {keyboard.map((key) => (
                <kbd key={key.id} id={key.key} className="keyboard__letter">
                    {key.key.toLocaleUpperCase()}
                </kbd>
            ))}
        </>
    );
}

export default Keyboard;
