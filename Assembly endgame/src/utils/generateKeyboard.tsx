import { Key } from "../types/types";

function generateKeyboard() {
    const keyboard: Key[] = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((letter) => ({
        // To ensure the ID matches everywhere, because ID is the letter -  for practical use.
        id: letter.toLocaleUpperCase(),
        className: "keyboard__letter",
        key: letter,
    }));

    return keyboard;
}

export default generateKeyboard;
