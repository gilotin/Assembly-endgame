import { DataApi } from "../types/types";

function createStructuredData(data: string) {
    let result: DataApi[] = [];
    for (let i = 0; i < data.length; i++) {
        result.push({ id: data[i], value: data[i], isActive: false });
    }
    return result;
}

export default createStructuredData;
