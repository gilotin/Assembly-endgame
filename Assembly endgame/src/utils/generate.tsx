import { Key } from "../types/types";

function generateLetters() {
    const keyboard: Key[] = "abcdefghijklmnopqrstuvwxyz".split("").map((letter, index) => ({
        id: index + 1,
        key: letter,
    }));

    return keyboard;
}

export default generateLetters;
