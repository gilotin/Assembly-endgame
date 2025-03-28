import { Key } from "../types/types";

function generateLetters() {
    const keyboard: Key[] = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => ({
        id: letter.toLocaleUpperCase(), // To ensure the ID matches everywhere, because ID is the letter -  for practical use.
        className: "keyboard__letter",
        key: letter,
    }));

    return keyboard;
}

export default generateLetters;
