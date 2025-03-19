export interface Key {
    id: string | undefined;
    key: string;
}

export interface KeyboardProps {
    keyboard: Key[];
}

export interface DataApi {
    id: string;
    value: string;
    isActive: boolean;
}

export interface MysticWordProps {
    wordData: DataApi[];
}
