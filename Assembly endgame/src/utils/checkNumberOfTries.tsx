import { KeyState } from "../types/types";

function checkNumberOfTries(keyState: KeyState[] | undefined) {
    const tries = keyState?.filter((key) => key.state === "fail").length || 0;

    return tries;
}

export default checkNumberOfTries;
