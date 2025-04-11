import { KeyState } from "../types/types";

function checkGameCondition(keyState: KeyState[] | undefined) {
    const failCondition = keyState?.filter((key) => key.state === "fail").length || 0;
    const winCondition = keyState?.filter((key) => key.state === "success").length || 0;

    return {
        failCondition: failCondition,
        winCondition: winCondition,
    };
}

export default checkGameCondition;
