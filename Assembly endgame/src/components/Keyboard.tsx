import { PROPS } from "../types/types";

function Keyboard({ keyboard, mysticWord, keyState, setMysticWord, setKeyState }: PROPS) {
    function onClickKey(e: React.MouseEvent<HTMLElement>) {
        const pressedKey = e.currentTarget.id;

        if (keyState?.some((key) => key.id === pressedKey)) return;

        setMysticWord((prevWordData) =>
            prevWordData.map((letter) =>
                letter.id === pressedKey ? { ...letter, isActive: true } : letter
            )
        );

        setKeyState((prevState) => [
            ...prevState,
            {
                id: pressedKey,
                state: mysticWord.some((letter) => letter.id === pressedKey) ? "success" : "fail",
            },
        ]);
    }

    return (
        <>
            {keyboard.map((letter) => (
                <kbd
                    onClick={(e) => onClickKey(e)}
                    key={letter.id}
                    id={letter.id ?? ""}
                    className={`keyboard__letter ${
                        keyState?.find((key) => key.id === letter.id)?.state ?? ""
                    }`}
                >
                    {letter.key}
                </kbd>
            ))}
        </>
    );
}

export default Keyboard;
