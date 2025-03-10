import { Key } from "../types/types";

function generateLetters() {
    const keyboard: Key[] = "abcdefghijklmnopqrstuvwxyz".split("").map((letter, index) => ({
        id: index,
        key: letter,
    }));

    return keyboard;
}

export default generateLetters;
