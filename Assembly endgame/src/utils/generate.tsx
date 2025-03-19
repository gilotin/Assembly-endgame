import { Key } from "../types/types";

function generateLetters() {
    const keyboard: Key[] = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => ({
        id: letter,
        key: letter,
    }));

    return keyboard;
}

export default generateLetters;
