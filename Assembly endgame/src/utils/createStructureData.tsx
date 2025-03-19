import { DataApi } from "../types/types";

function createStructuredData(data: string) {
    let result: DataApi[] = [];
    for (let i = 0; i < data.length; i++) {
        // To ensure the ID matches everywhere, because ID is the letter -  for practical use.
        result.push({ id: data[i].toLocaleUpperCase(), value: data[i], isActive: false });
    }
    return result;
}

export default createStructuredData;
