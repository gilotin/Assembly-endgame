import { KeyState, DataApi } from "../types/types";

function checkGameConditionFail(keyState: KeyState[], mysticWord: DataApi[]) {
    const failTries = keyState?.filter((key) => key.state === "fail").length || 0;

    let winCondition: boolean = false;

    if ((mysticWord.filter((state) => state.isActive === true).length || 0) === 6) {
        winCondition = true;
    }

    return {
        failCondition: failTries,
        winCondition: winCondition,
    };
}

export default checkGameConditionFail;
