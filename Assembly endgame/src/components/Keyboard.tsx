import { DataApi, PROPS } from "../types/types";

function Keyboard({ keyboard, setMysticWord, setKeyState }: PROPS) {
    function onClickKey(e: React.MouseEvent<HTMLElement>) {
        const pressedKey = e.currentTarget;

        checkLetter(pressedKey);
    }

    function checkLetter(pressedKey: HTMLElement) {
        setMysticWord((prevState) =>
            prevState.map((letter) =>
                letter.id === pressedKey.id ? { ...letter, isActive: true } : letter
            )
        );
    }

    return (
        <>
            {keyboard.map((key) => (
                <kbd
                    onClick={(e) => onClickKey(e)}
                    key={key.id}
                    id={key.id ?? ""}
                    className={key.className}
                >
                    {key.key}
                </kbd>
            ))}
        </>
    );
}

export default Keyboard;
